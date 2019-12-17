export default {
  notifications: [
    {
      id: "1",
      message: {
        type: "disputeRaised",
        invoiceId: "10310000001",
        amount: "$8,439.34",
        vendor: "Verizon",
        sender: {
          name: "Petey Cruiser",
          image: "profile-pic2.png"
        },
        disputeTag: "PO number missing",
        comment: "Can you please update the PO number?"
      },
      time: "Just now",
      unread: true
    },
    {
      id: "2",
      message: {
        type: "resolveResponse",
        invoiceId: "10310000001",
        amount: "$5,259.34",
        vendor: "Southern California Edison",
        sender: {
          name: "Lindy Jesse",
          image: "profile-pic3.png"
        },
        comment: "We have the supporting document on e-mail"
      },
      time: "15 mins ago",
      unread: true
    },
    {
      id: "3",
      message: {
        type: "approvalRequest",
        invoiceId: "10310000001",
        amount: "$34,656.34",
        vendor: "Dish Network",
        sender: {
          name: "Petey Cruiser",
          image: "profile-pic2.png"
        }
      },
      time: "28 mins ago",
      unread: true
    },
    {
      id: "4",
      message: {
        type: "submittedForPayment",
        amount: "$14,251.11",
        vendor: "Dish Network"
      },
      time: "41 mins ago",
      unread: true
    }
  ],
  inProcessInvoicesList: [
    {
      urn: "10310000001",
      clientLocation: "001 Alberta",
      poNumber: "47346",
      invoiceDate: "12/01/2018",
      invoiceNumber: "8373452",
      invoiceAmount: {
        symbol: "$",
        amount: "2342.12",
        code: "USD"
      },
      invoiceType: "Invoice",
      assignedUser: "Mario Speedwagon",
      invoiceStatus: "Awaiting Resolution",
      followupReason: "PO missing",
      activeTags: ["PO missing", "Wrong tax amount"]
    },
    {
      urn: "10310000002",
      clientLocation: "004 Larchmont",
      poNumber: "46845",
      invoiceDate: "14/02/2018",
      invoiceNumber: "1232132",
      invoiceAmount: {
        symbol: "$",
        amount: "100.02",
        code: "USD"
      },
      invoiceType: "Statement",
      assignedUser: "Petey Cruiser",
      invoiceStatus: "Awaiting approval"
    }
  ],
  AwaitingPaymentInvoicesList: [
    {
      urn: "10310000001",
      clientLocation: "001 Alberta",
      poNumber: "47346",
      invoiceDate: "12/01/2018",
      invoiceNumber: "8373452",
      invoiceAmount: {
        symbol: "$",
        amount: "2342.12",
        code: "USD"
      },
      invoiceType: "Invoice",
      dueDate: "12/02/2018",
      possiblePaymentDate: "05/02/2018"
    },
    {
      urn: "10310000002",
      clientLocation: "004 Larchmont",
      poNumber: "46845",
      invoiceDate: "14/02/2018",
      invoiceNumber: "1232132",
      invoiceAmount: {
        symbol: "$",
        amount: "100.02",
        code: "USD"
      },
      invoiceType: "Statement",
      dueDate: "12/02/2018",
      possiblePaymentDate: "05/02/2018"
    },
    {
      urn: "10310000004",
      clientLocation: "007 Studio city",
      poNumber: "02935",
      invoiceDate: "22/03/2018",
      invoiceNumber: "6789722",
      invoiceAmount: {
        symbol: "$",
        amount: "983.23",
        code: "USD"
      },
      invoiceType: "Credit",
      dueDate: "22/04/2018",
      possiblePaymentDate: "15/04/2018"
    },
    {
      urn: "10310000006",
      clientLocation: "002 Division",
      poNumber: "34758",
      invoiceDate: "24/04/2018",
      invoiceNumber: "0980025",
      invoiceAmount: {
        symbol: "$",
        amount: "3750.20",
        code: "CAD"
      },
      invoiceType: "Invoice",
      dueDate: "24/05/2018",
      possiblePaymentDate: "17/05/2018"
    },
    {
      urn: "10310000007",
      clientLocation: "004 Larchmont",
      poNumber: "46836",
      invoiceDate: "02/05/2018",
      invoiceNumber: "9812341",
      invoiceAmount: {
        symbol: "$",
        amount: "987.21",
        code: "USD"
      },
      invoiceType: "Credit",
      dueDate: "02/06/2018",
      possiblePaymentDate: "25/05/2018"
    }
  ],
  paidInvoicesList: [
    {
      urn: "10310000001",
      clientLocation: "001 Alberta",
      poNumber: "47346",
      invoiceDate: "12/01/2018",
      invoiceNumber: "8373452",
      invoiceAmount: {
        symbol: "$",
        amount: "2342.12",
        code: "USD"
      },
      invoiceType: "Invoice",
      dueDate: "12/02/2018",
      paymentDate: "05/02/2018",
      paymentMode: "ACH",
      paymentMethod: "Individual"
    },
    {
      urn: "10310000002",
      clientLocation: "004 Larchmont",
      poNumber: "46845",
      invoiceDate: "14/02/2018",
      invoiceNumber: "1232132",
      invoiceAmount: {
        symbol: "$",
        amount: "100.02",
        code: "USD"
      },
      invoiceType: "Statement",
      dueDate: "12/02/2018",
      paymentDate: "05/02/2018",
      paymentMode: "ACH",
      paymentMethod: "Batch",
      batchId: "Batch023"
    },
    {
      urn: "10310000003",
      clientLocation: "002 Division",
      poNumber: "98243",
      invoiceDate: "20/03/2018",
      invoiceNumber: "6721234",
      invoiceAmount: {
        symbol: "$",
        amount: "100.22",
        code: "USD"
      },
      invoiceType: "Receipt",
      dueDate: "14/03/2018",
      paymentDate: "07/03/2018",
      paymentMode: "ACH",
      paymentMethod: "Batch",
      batchId: "Batch023"
    }
  ],
  cancelledInvoicesList: [
    {
      urn: "10310000001",
      clientLocation: "001 Alberta",
      poNumber: "47346",
      invoiceDate: "12/01/2018",
      invoiceNumber: "8373452",
      invoiceAmount: {
        symbol: "$",
        amount: "2342.12",
        code: "USD"
      },
      invoiceType: "Invoice",
      cancellationReason: "Product delayed"
    },
    {
      urn: "10310000002",
      clientLocation: "004 Larchmont",
      poNumber: "46845",
      invoiceDate: "14/02/2018",
      invoiceNumber: "1232132",
      invoiceAmount: {
        symbol: "$",
        amount: "100.02",
        code: "USD"
      },
      invoiceType: "Statement",
      cancellationReason: "Payment issues"
    },
    {
      urn: "10310000003",
      clientLocation: "002 Division",
      poNumber: "98243",
      invoiceDate: "20/03/2018",
      invoiceNumber: "6721234",
      invoiceAmount: {
        symbol: "$",
        amount: "100.22",
        code: "USD"
      },
      invoiceType: "Receipt",
      cancellationReason: "Duplicate billing"
    },
    {
      urn: "10310000004",
      clientLocation: "007 Studio city",
      poNumber: "02935",
      invoiceDate: "22/03/2018",
      invoiceNumber: "6789722",
      invoiceAmount: {
        symbol: "$",
        amount: "983.23",
        code: "USD"
      },
      invoiceType: "Credit",
      cancellationReason: "Product delayed"
    }
  ],
  tickets: [
    {
      type: "In-Process",
      ticketId: "AB1324123",
      question: "Payment Request",
      note: "Payment Request",
      otherInvoiceList: [],
      createdOn: "",
      status: "active"
    },
    {
      type: "Awaiting Payment",
      ticketId: "AB1324123",
      question: "Active Tags",
      note: "Payment Request",
      otherInvoiceList: [],
      createdOn: "",
      status: "pending"
    },
    {
      type: "Paid Invoices",
      ticketId: "AB1324123",
      question: "API Works",
      note: "Payment Request",
      otherInvoiceList: [],
      createdOn: "",
      status: "closed"
    }
  ]
};
