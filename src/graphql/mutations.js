/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createChat = `mutation CreateChat($input: CreateChatInput!) {
  createChat(input: $input) {
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
export const updateChat = `mutation UpdateChat($input: UpdateChatInput!) {
  updateChat(input: $input) {
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
export const deleteChat = `mutation DeleteChat($input: DeleteChatInput!) {
  deleteChat(input: $input) {
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
export const createCustomer = `mutation CreateCustomer($input: CreateCustomerInput!) {
  createCustomer(input: $input) {
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
export const updateCustomer = `mutation UpdateCustomer($input: UpdateCustomerInput!) {
  updateCustomer(input: $input) {
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
export const deleteCustomer = `mutation DeleteCustomer($input: DeleteCustomerInput!) {
  deleteCustomer(input: $input) {
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
export const createHelper = `mutation CreateHelper($input: CreateHelperInput!) {
  createHelper(input: $input) {
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
export const updateHelper = `mutation UpdateHelper($input: UpdateHelperInput!) {
  updateHelper(input: $input) {
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
export const deleteHelper = `mutation DeleteHelper($input: DeleteHelperInput!) {
  deleteHelper(input: $input) {
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
export const createTask = `mutation CreateTask($input: CreateTaskInput!) {
  createTask(input: $input) {
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
export const updateTask = `mutation UpdateTask($input: UpdateTaskInput!) {
  updateTask(input: $input) {
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
export const deleteTask = `mutation DeleteTask($input: DeleteTaskInput!) {
  deleteTask(input: $input) {
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
export const createAfter = `mutation CreateAfter($input: CreateAfterInput!) {
  createAfter(input: $input) {
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
export const updateAfter = `mutation UpdateAfter($input: UpdateAfterInput!) {
  updateAfter(input: $input) {
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
export const deleteAfter = `mutation DeleteAfter($input: DeleteAfterInput!) {
  deleteAfter(input: $input) {
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
export const createBefore = `mutation CreateBefore($input: CreateBeforeInput!) {
  createBefore(input: $input) {
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
export const updateBefore = `mutation UpdateBefore($input: UpdateBeforeInput!) {
  updateBefore(input: $input) {
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
export const deleteBefore = `mutation DeleteBefore($input: DeleteBeforeInput!) {
  deleteBefore(input: $input) {
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
export const createCustomerStatus = `mutation CreateCustomerStatus($input: CreateCustomerStatusInput!) {
  createCustomerStatus(input: $input) {
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
export const updateCustomerStatus = `mutation UpdateCustomerStatus($input: UpdateCustomerStatusInput!) {
  updateCustomerStatus(input: $input) {
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
export const deleteCustomerStatus = `mutation DeleteCustomerStatus($input: DeleteCustomerStatusInput!) {
  deleteCustomerStatus(input: $input) {
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
export const createNewCare = `mutation CreateNewCare($input: CreateNewCareInput!) {
  createNewCare(input: $input) {
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
export const updateNewCare = `mutation UpdateNewCare($input: UpdateNewCareInput!) {
  updateNewCare(input: $input) {
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
export const deleteNewCare = `mutation DeleteNewCare($input: DeleteNewCareInput!) {
  deleteNewCare(input: $input) {
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
export const createPublicize = `mutation CreatePublicize($input: CreatePublicizeInput!) {
  createPublicize(input: $input) {
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
export const updatePublicize = `mutation UpdatePublicize($input: UpdatePublicizeInput!) {
  updatePublicize(input: $input) {
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
export const deletePublicize = `mutation DeletePublicize($input: DeletePublicizeInput!) {
  deletePublicize(input: $input) {
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
export const createHelperSick = `mutation CreateHelperSick($input: CreateHelperSickInput!) {
  createHelperSick(input: $input) {
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
export const updateHelperSick = `mutation UpdateHelperSick($input: UpdateHelperSickInput!) {
  updateHelperSick(input: $input) {
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
export const deleteHelperSick = `mutation DeleteHelperSick($input: DeleteHelperSickInput!) {
  deleteHelperSick(input: $input) {
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
export const createContact = `mutation CreateContact($input: CreateContactInput!) {
  createContact(input: $input) {
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
export const updateContact = `mutation UpdateContact($input: UpdateContactInput!) {
  updateContact(input: $input) {
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
export const deleteContact = `mutation DeleteContact($input: DeleteContactInput!) {
  deleteContact(input: $input) {
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
export const createReport = `mutation CreateReport($input: CreateReportInput!) {
  createReport(input: $input) {
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
export const updateReport = `mutation UpdateReport($input: UpdateReportInput!) {
  updateReport(input: $input) {
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
export const deleteReport = `mutation DeleteReport($input: DeleteReportInput!) {
  deleteReport(input: $input) {
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
export const createShopping = `mutation CreateShopping($input: CreateShoppingInput!) {
  createShopping(input: $input) {
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
export const updateShopping = `mutation UpdateShopping($input: UpdateShoppingInput!) {
  updateShopping(input: $input) {
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
export const deleteShopping = `mutation DeleteShopping($input: DeleteShoppingInput!) {
  deleteShopping(input: $input) {
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
