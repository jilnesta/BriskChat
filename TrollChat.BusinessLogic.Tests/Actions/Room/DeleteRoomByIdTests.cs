﻿using Moq;
using System;
using System.Collections.Generic;
using System.Text;
using TrollChat.BusinessLogic.Actions.Room.Implementation;
using TrollChat.DataAccess.Repositories.Interfaces;
using Xunit;

namespace TrollChat.BusinessLogic.Tests.Actions.Room
{
    public class DeleteRoomByIdTests
    {
        [Fact]
        public void Invoke_ValidData_DeleteAndSaveAreCalled()
        {
            // prepare
            var RoomFromDb = new DataAccess.Models.Room()
            {
                Id = 1
            };

            var mockedRoomRepository = new Mock<IRoomRepository>();
            mockedRoomRepository.Setup(r => r.GetById(1)).Returns(RoomFromDb);

            var action = new DeleteRoomById(mockedRoomRepository.Object);

            // action
            var result = action.Invoke(1);

            // assert
            Assert.True(result);
            mockedRoomRepository.Verify(r => r.Delete(It.IsAny<DataAccess.Models.Room>()), Times.Once());
            mockedRoomRepository.Verify(r => r.Save(), Times.Once());
        }

        [Fact]
        public void Invoke_ValidData_DeleteNorSaveAreCalled()
        {
            // prepare
            var mockedEmailRepository = new Mock<IRoomRepository>();

            var action = new DeleteRoomById(mockedEmailRepository.Object);

            // action
            var result = action.Invoke(1);

            // assert
            Assert.False(result);
            mockedEmailRepository.Verify(r => r.Delete(It.IsAny<DataAccess.Models.Room>()), Times.Never);
            mockedEmailRepository.Verify(r => r.Save(), Times.Never);
        }
    }
}