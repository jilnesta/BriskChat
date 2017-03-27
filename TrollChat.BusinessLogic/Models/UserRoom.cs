﻿using System;
using System.Collections.Generic;
using System.Text;

namespace TrollChat.BusinessLogic.Models
{
    public class UserRoom : BaseModel
    {
        public UserRoom()
        {
            Messages = new HashSet<Message>();
            Tags = new HashSet<Tag>();
        }

        public List<Message> Messages { get; set; }

        public List<Tag> Tags { get; set; }

        public User User { get; set; }

        public Room Room { get; set; }

        public Role Role { get; set; }

        public DateTime? LockedUntil { get; set; }

        public Message LastMessage { get; set; }
    }
}