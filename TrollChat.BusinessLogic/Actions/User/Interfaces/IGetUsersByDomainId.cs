﻿using System;
using System.Collections.Generic;
using BriskChat.BusinessLogic.Actions.Base;
using BriskChat.BusinessLogic.Models;

namespace BriskChat.BusinessLogic.Actions.User.Interfaces
{
    public interface IGetUsersByDomainId : IAction
    {
        List<UserModel> Invoke(Guid domainId);
    }
}