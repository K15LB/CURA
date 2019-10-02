/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateChat = `subscription OnCreateChat {
  onCreateChat {
    id
    chatid
    username
    content
    chatstatus
    createdAt
    customers {
      id
      customerid
      firstname
      lastname
      firstruby
      lastruby
      male
      birthday
      year
      month
      day
      adress
      phoneNumber
      mobilePhoneNumber
      email
      emergencyfamily
      emergencycontact
      customerstatus
    }
  }
}
`;
export const onUpdateChat = `subscription OnUpdateChat {
  onUpdateChat {
    id
    chatid
    username
    content
    chatstatus
    createdAt
    customers {
      id
      customerid
      firstname
      lastname
      firstruby
      lastruby
      male
      birthday
      year
      month
      day
      adress
      phoneNumber
      mobilePhoneNumber
      email
      emergencyfamily
      emergencycontact
      customerstatus
    }
  }
}
`;
export const onDeleteChat = `subscription OnDeleteChat {
  onDeleteChat {
    id
    chatid
    username
    content
    chatstatus
    createdAt
    customers {
      id
      customerid
      firstname
      lastname
      firstruby
      lastruby
      male
      birthday
      year
      month
      day
      adress
      phoneNumber
      mobilePhoneNumber
      email
      emergencyfamily
      emergencycontact
      customerstatus
    }
  }
}
`;
export const onCreateCustomer = `subscription OnCreateCustomer {
  onCreateCustomer {
    id
    customerid
    firstname
    lastname
    firstruby
    lastruby
    male
    birthday
    year
    month
    day
    adress
    phoneNumber
    mobilePhoneNumber
    email
    emergencyfamily
    emergencycontact
    customerstatus
    chat {
      nextToken
    }
  }
}
`;
export const onUpdateCustomer = `subscription OnUpdateCustomer {
  onUpdateCustomer {
    id
    customerid
    firstname
    lastname
    firstruby
    lastruby
    male
    birthday
    year
    month
    day
    adress
    phoneNumber
    mobilePhoneNumber
    email
    emergencyfamily
    emergencycontact
    customerstatus
    chat {
      nextToken
    }
  }
}
`;
export const onDeleteCustomer = `subscription OnDeleteCustomer {
  onDeleteCustomer {
    id
    customerid
    firstname
    lastname
    firstruby
    lastruby
    male
    birthday
    year
    month
    day
    adress
    phoneNumber
    mobilePhoneNumber
    email
    emergencyfamily
    emergencycontact
    customerstatus
    chat {
      nextToken
    }
  }
}
`;
export const onCreateHelper = `subscription OnCreateHelper {
  onCreateHelper {
    helperid
    firstname
    lastname
    firstruby
    lastruby
    male
    birthday
    year
    month
    day
    mobilephoneNumber
    line
    helperStatus
  }
}
`;
export const onUpdateHelper = `subscription OnUpdateHelper {
  onUpdateHelper {
    helperid
    firstname
    lastname
    firstruby
    lastruby
    male
    birthday
    year
    month
    day
    mobilephoneNumber
    line
    helperStatus
  }
}
`;
export const onDeleteHelper = `subscription OnDeleteHelper {
  onDeleteHelper {
    helperid
    firstname
    lastname
    firstruby
    lastruby
    male
    birthday
    year
    month
    day
    mobilephoneNumber
    line
    helperStatus
  }
}
`;
export const onCreateTask = `subscription OnCreateTask {
  onCreateTask {
    id
    taskid
    username
    tasktitle
    taskcontent
    deadline
    createdAt
    updatedAt
    taskStatus
  }
}
`;
export const onUpdateTask = `subscription OnUpdateTask {
  onUpdateTask {
    id
    taskid
    username
    tasktitle
    taskcontent
    deadline
    createdAt
    updatedAt
    taskStatus
  }
}
`;
export const onDeleteTask = `subscription OnDeleteTask {
  onDeleteTask {
    id
    taskid
    username
    tasktitle
    taskcontent
    deadline
    createdAt
    updatedAt
    taskStatus
  }
}
`;
export const onCreateAfter = `subscription OnCreateAfter {
  onCreateAfter {
    id
    customername
    username
    infoSource
    status
    start
    startTime
    end
    endTime
    contact
    check
    createdAt
    updatedAt
    content
  }
}
`;
export const onUpdateAfter = `subscription OnUpdateAfter {
  onUpdateAfter {
    id
    customername
    username
    infoSource
    status
    start
    startTime
    end
    endTime
    contact
    check
    createdAt
    updatedAt
    content
  }
}
`;
export const onDeleteAfter = `subscription OnDeleteAfter {
  onDeleteAfter {
    id
    customername
    username
    infoSource
    status
    start
    startTime
    end
    endTime
    contact
    check
    createdAt
    updatedAt
    content
  }
}
`;
export const onCreateBefore = `subscription OnCreateBefore {
  onCreateBefore {
    id
    customername
    username
    infoSource
    status
    start
    startTime
    end
    endTime
    contact
    check
    createdAt
    updatedAt
    content
  }
}
`;
export const onUpdateBefore = `subscription OnUpdateBefore {
  onUpdateBefore {
    id
    customername
    username
    infoSource
    status
    start
    startTime
    end
    endTime
    contact
    check
    createdAt
    updatedAt
    content
  }
}
`;
export const onDeleteBefore = `subscription OnDeleteBefore {
  onDeleteBefore {
    id
    customername
    username
    infoSource
    status
    start
    startTime
    end
    endTime
    contact
    check
    createdAt
    updatedAt
    content
  }
}
`;
export const onCreateCustomerStatus = `subscription OnCreateCustomerStatus {
  onCreateCustomerStatus {
    id
    customername
    username
    infoSource
    status
    start
    end
    hospitalname
    contact
    content
  }
}
`;
export const onUpdateCustomerStatus = `subscription OnUpdateCustomerStatus {
  onUpdateCustomerStatus {
    id
    customername
    username
    infoSource
    status
    start
    end
    hospitalname
    contact
    content
  }
}
`;
export const onDeleteCustomerStatus = `subscription OnDeleteCustomerStatus {
  onDeleteCustomerStatus {
    id
    customername
    username
    infoSource
    status
    start
    end
    hospitalname
    contact
    content
  }
}
`;
export const onCreateNewCare = `subscription OnCreateNewCare {
  onCreateNewCare {
    id
    customername
    username
    infoSource
    status
    start
    end
    content
    contact
  }
}
`;
export const onUpdateNewCare = `subscription OnUpdateNewCare {
  onUpdateNewCare {
    id
    customername
    username
    infoSource
    status
    start
    end
    content
    contact
  }
}
`;
export const onDeleteNewCare = `subscription OnDeleteNewCare {
  onDeleteNewCare {
    id
    customername
    username
    infoSource
    status
    start
    end
    content
    contact
  }
}
`;
export const onCreatePublicize = `subscription OnCreatePublicize {
  onCreatePublicize {
    id
    customername
    username
    infoSource
    start
    end
    contact
    content
  }
}
`;
export const onUpdatePublicize = `subscription OnUpdatePublicize {
  onUpdatePublicize {
    id
    customername
    username
    infoSource
    start
    end
    contact
    content
  }
}
`;
export const onDeletePublicize = `subscription OnDeletePublicize {
  onDeletePublicize {
    id
    customername
    username
    infoSource
    start
    end
    contact
    content
  }
}
`;
export const onCreateHelperSick = `subscription OnCreateHelperSick {
  onCreateHelperSick {
    id
    helpername
    username
    infoSource
    status
    start
    end
    contact
    content
  }
}
`;
export const onUpdateHelperSick = `subscription OnUpdateHelperSick {
  onUpdateHelperSick {
    id
    helpername
    username
    infoSource
    status
    start
    end
    contact
    content
  }
}
`;
export const onDeleteHelperSick = `subscription OnDeleteHelperSick {
  onDeleteHelperSick {
    id
    helpername
    username
    infoSource
    status
    start
    end
    contact
    content
  }
}
`;
export const onCreateContact = `subscription OnCreateContact {
  onCreateContact {
    id
    customername
    username
    infoSource
    toWhom
    contactPhoneNumber
    start
    end
    contact
    content
    contactUs
  }
}
`;
export const onUpdateContact = `subscription OnUpdateContact {
  onUpdateContact {
    id
    customername
    username
    infoSource
    toWhom
    contactPhoneNumber
    start
    end
    contact
    content
    contactUs
  }
}
`;
export const onDeleteContact = `subscription OnDeleteContact {
  onDeleteContact {
    id
    customername
    username
    infoSource
    toWhom
    contactPhoneNumber
    start
    end
    contact
    content
    contactUs
  }
}
`;
export const onCreateReport = `subscription OnCreateReport {
  onCreateReport {
    id
    customername
    username
    infoSource
    contact
    content
    start
    end
  }
}
`;
export const onUpdateReport = `subscription OnUpdateReport {
  onUpdateReport {
    id
    customername
    username
    infoSource
    contact
    content
    start
    end
  }
}
`;
export const onDeleteReport = `subscription OnDeleteReport {
  onDeleteReport {
    id
    customername
    username
    infoSource
    contact
    content
    start
    end
  }
}
`;
export const onCreateShopping = `subscription OnCreateShopping {
  onCreateShopping {
    id
    customername
    username
    infoSource
    start
    end
    shopname
    contact
    content
  }
}
`;
export const onUpdateShopping = `subscription OnUpdateShopping {
  onUpdateShopping {
    id
    customername
    username
    infoSource
    start
    end
    shopname
    contact
    content
  }
}
`;
export const onDeleteShopping = `subscription OnDeleteShopping {
  onDeleteShopping {
    id
    customername
    username
    infoSource
    start
    end
    shopname
    contact
    content
  }
}
`;
