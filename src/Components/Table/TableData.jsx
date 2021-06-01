const rows = [
    {
        id: 1,
        eventTime: `2015-05-24 18:32:46`,
        lCode: 'L150',
        lengthOfStay: 2,
        firstName: 'Karem',
        lastName: 'Mulla',
        phone: '0912123123',
        parqQuoteID: 'R-206263H',
        desiredDeliveryDate: '2020-6-20',
        brand: 'PUPS',
        city: 'Calagary',
        typeOfJob: 'Long Distance',
        status: 'Declined - Book For NADD',
    },
    {
        id: 2,
        eventTime: '2018-02-04 18:32:46',
        lCode: 'L170',
        lengthOfStay: 2,
        firstName: 'Karem',
        lastName: 'Mulla',
        phone: '0912123123',
        parqQuoteID: 'R-206263H',
        desiredDeliveryDate: '2021-6-20',
        brand: 'Cubeit',
        city: 'London',
        typeOfJob: 'Long Distance',
        status: 'New',
    },
    {
        id: 3,
        eventTime: '2021-05-24 18:32:46',
        lCode: 'L150',
        lengthOfStay: 2,
        firstName: 'Karem',
        lastName: 'Mulla',
        phone: '0912123123',
        parqQuoteID: 'R-206263H',
        desiredDeliveryDate: '2021-6-20',
        brand: 'Cubeit',
        city: 'Brampton',
        typeOfJob: 'Move_Store',
        status: 'Complated - Win',
    },
    {
        id: 4,
        eventTime: '2021-05-24 18:32:46',
        lCode: 'L150',
        lengthOfStay: 2,
        firstName: 'Karem',
        lastName: 'Mulla',
        phone: '0912123123',
        parqQuoteID: 'R-206263H',
        desiredDeliveryDate: '2021-6-20',
        brand: 'PUPS',
        city: 'London',
        typeOfJob: 'Move',
        status: 'Declined - Book For NADD',
    },
    {
        id: 5,
        eventTime: '2013-09-28 18:32:46',
        lCode: 'L150',
        lengthOfStay: 2,
        firstName: 'Karem',
        lastName: 'Mulla',
        phone: '0912123123',
        parqQuoteID: 'R-206263H',
        desiredDeliveryDate: '2021-6-20',
        brand: 'PUPS',
        city: 'Brampton',
        typeOfJob: 'Move',
        status: 'New',
    },
    {
        id: 6,
        eventTime: '2019-03-24 18:32:46',
        lCode: 'L150',
        lengthOfStay: 2,
        firstName: 'Karem',
        lastName: 'Mulla',
        phone: '0912123123',
        parqQuoteID: 'R-206263H',
        desiredDeliveryDate: '2021-6-20',
        brand: 'Cubeit',
        city: 'AB',
        typeOfJob: 'Onsite Storage',
        status: 'New',
    },

];

export const headers = [
    {label: 'ID',                    key: 'id'},
    {label: 'Event Time',            key: 'eventTime'},
    {label: 'LCode',                 key: 'lCode'},
    {label: 'Length Of Stay',        key: 'lengthOfStay'},
    {label: 'First Name',            key: 'firstName'},
    {label: 'Phone',                 key: 'phone'},
    {label: 'Parq Quote ID',         key: 'parqQuoteID'},
    {label: 'Desired Delivery Date', key: 'desiredDeliveryDate'},
    {label: 'Brand',                 key: 'brand'},
    {label: 'City',                  key: 'city'},
    {label: 'Type Of Job',           key: 'typeOfJob'},
    {label: 'Status',                key: 'status'},
]

export default rows