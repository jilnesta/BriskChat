﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TrollChat.DataAccess.Models
{
    public class UserRoom : BaseEntity
    {
        public UserRoom()
        {
            Messages = new HashSet<Message>();
        }

        [InverseProperty(nameof(Message.UserRoom))]
        public virtual ICollection<Message> Messages { get; set; }

        [Required]
        public User User { get; set; }

        [Required]
        public Room Room { get; set; }

        [Required]
        public Role Role { get; set; }

        public DateTime? LockedUntil { get; set; }

        [InverseProperty(nameof(Message.LastMessageFor))]
        public Message LastMessage { get; set; }
    }
}