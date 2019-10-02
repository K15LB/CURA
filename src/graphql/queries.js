/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getChat = `query GetChat($id: ID!) {
  getChat(id: $id) {
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
export const listChats = `query ListChats(
  $filter: ModelChatFilterInput
  $limit: Int
  $nextToken: String
) {
  listChats(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      chatid
      username
      content
      chatstatus
      createdAt
    }
    nextToken
  }
}
`;
export const getCustomer = `query GetCustomer($id: ID!) {
  getCustomer(id: $id) {
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
export const listCustomers = `query ListCustomers(
  $filter: ModelCustomerFilterInput
  $limit: Int
  $nextToken: String
) {
  listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getHelper = `query GetHelper($id: ID!) {
  getHelper(id: $id) {
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
export const listHelpers = `query ListHelpers(
  $filter: ModelHelperFilterInput
  $limit: Int
  $nextToken: String
) {
  listHelpers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getTask = `query GetTask($id: ID!) {
  getTask(id: $id) {
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
export const listTasks = `query ListTasks(
  $filter: ModelTaskFilterInput
  $limit: Int
  $nextToken: String
) {
  listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getAfter = `query GetAfter($id: ID!) {
  getAfter(id: $id) {
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
export const listAfters = `query ListAfters(
  $filter: ModelAfterFilterInput
  $limit: Int
  $nextToken: String
) {
  listAfters(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getBefore = `query GetBefore($id: ID!) {
  getBefore(id: $id) {
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
export const listBefores = `query ListBefores(
  $filter: ModelBeforeFilterInput
  $limit: Int
  $nextToken: String
) {
  listBefores(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getCustomerStatus = `query GetCustomerStatus($id: ID!) {
  getCustomerStatus(id: $id) {
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
export const listCustomerStatuss = `query ListCustomerStatuss(
  $filter: ModelCustomerStatusFilterInput
  $limit: Int
  $nextToken: String
) {
  listCustomerStatuss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getNewCare = `query GetNewCare($id: ID!) {
  getNewCare(id: $id) {
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
export const listNewCares = `query ListNewCares(
  $filter: ModelNewCareFilterInput
  $limit: Int
  $nextToken: String
) {
  listNewCares(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getPublicize = `query GetPublicize($id: ID!) {
  getPublicize(id: $id) {
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
export const listPublicizes = `query ListPublicizes(
  $filter: ModelPublicizeFilterInput
  $limit: Int
  $nextToken: String
) {
  listPublicizes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      customername
      username
      infoSource
      start
      end
      contact
      content
    }
    nextToken
  }
}
`;
export const getHelperSick = `query GetHelperSick($id: ID!) {
  getHelperSick(id: $id) {
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
export const listHelperSicks = `query ListHelperSicks(
  $filter: ModelHelperSickFilterInput
  $limit: Int
  $nextToken: String
) {
  listHelperSicks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getContact = `query GetContact($id: ID!) {
  getContact(id: $id) {
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
export const listContacts = `query ListContacts(
  $filter: ModelContactFilterInput
  $limit: Int
  $nextToken: String
) {
  listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getReport = `query GetReport($id: ID!) {
  getReport(id: $id) {
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
export const listReports = `query ListReports(
  $filter: ModelReportFilterInput
  $limit: Int
  $nextToken: String
) {
  listReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      customername
      username
      infoSource
      contact
      content
      start
      end
    }
    nextToken
  }
}
`;
export const getShopping = `query GetShopping($id: ID!) {
  getShopping(id: $id) {
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
export const listShoppings = `query ListShoppings(
  $filter: ModelShoppingFilterInput
  $limit: Int
  $nextToken: String
) {
  listShoppings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
