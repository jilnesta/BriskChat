﻿using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using TrollChat.BusinessLogic.Actions.Room.Interfaces;
using TrollChat.BusinessLogic.Models;
using TrollChat.Web.Helpers;
using TrollChat.Web.Models.Room;

namespace TrollChat.Web.Hubs
{
    [Authorize(Roles = "User")]
    public class ChannelHub : Hub
    {
        private readonly IAddNewRoom addNewRoom;
        private const string TimeStampRepresentation = "HH:mm";

        public ChannelHub(IAddNewRoom addNewRoom)
        {
            this.addNewRoom = addNewRoom;
        }

        public async Task JoinRoom(string roomId)
        {
            await Groups.Add(Context.ConnectionId, roomId);

            var timestamp = DateTime.UtcNow.ToLocalTime();
            var chatTime = timestamp.ToString(TimeStampRepresentation);

            Clients.Group(roomId).broadcastMessage("TrollChat", this.Name() + " joined to this channel (" + roomId + ")", chatTime);
        }

        public async Task LeaveRoom(string roomId)
        {
            await Groups.Remove(Context.ConnectionId, roomId);

            var timestamp = DateTime.UtcNow.ToLocalTime();
            var chatTime = timestamp.ToString(TimeStampRepresentation);

            Clients.Group(roomId).broadcastMessage("TrollChat", this.Name() + " left from this channel (" + roomId + ")", chatTime);
        }

        public void Send(string roomId, string message)
        {
            if (string.IsNullOrEmpty(roomId.Trim()) || string.IsNullOrEmpty(message.Trim()))
            {
                return;
            }

            var timestamp = DateTime.UtcNow.ToLocalTime();
            var chatTime = timestamp.ToString(TimeStampRepresentation);

            Clients.Group(roomId).broadcastMessage(this.UserId(), message.Trim(), chatTime);
        }

        public void CreateNewChannel(CreateNewRoomViewModel model)
        {
            if (string.IsNullOrEmpty(model.Name))
            {
                return;
            }

            var roomModel = AutoMapper.Mapper.Map<RoomModel>(model);
            var room = addNewRoom.Invoke(roomModel, this.UserId());

            if (room == 0)
            {
                return;
            }

            Clients.Caller.channelAddedAction(model.Name, room, model.IsPublic);
        }

        public void DeleteMessage(string roomId, int messageId)
        {
            if (string.IsNullOrEmpty(roomId.Trim()) || messageId <= 0)
            {
                return;
            }

            // TODO: Check author and delete from database

            Clients.Group(roomId).deleteMessage(messageId);
        }
    }
}