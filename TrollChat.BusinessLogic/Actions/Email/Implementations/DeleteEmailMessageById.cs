﻿using System;
using BriskChat.BusinessLogic.Actions.Email.Interfaces;
using BriskChat.DataAccess.Repositories.Interfaces;
using BriskChat.DataAccess.UnitOfWork;

namespace BriskChat.BusinessLogic.Actions.Email.Implementations
{
    public class DeleteEmailMessageById : IDeleteEmailMessageById
    {
        private readonly IEmailRepository emailRepository;
        private readonly IUnitOfWork _unitOfWork;

        public DeleteEmailMessageById(IEmailRepository emailRepository, IUnitOfWork unitOfWork)
        {
            this.emailRepository = emailRepository;
            _unitOfWork = unitOfWork;
        }

        public bool Invoke(Guid emailId)
        {
            if (emailId == Guid.Empty)
            {
                return false;
            }

            var emailToDelete = emailRepository.GetById(emailId);

            if (emailToDelete == null)
            {
                return false;
            }

            emailRepository.Delete(emailToDelete);
            _unitOfWork.Save();

            return true;
        }
    }
}