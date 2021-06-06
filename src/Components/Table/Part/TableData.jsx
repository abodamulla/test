import {
    ClearTwoTone,
    LocalShipping,
    Check,
} from '@material-ui/icons'

const rows = [
    {
        id: 1,
        eventTime: `2015-05-24 18:32:46`,
        lCode: 'L150',
        lengthOfStay: 1,
        firstName: 'Karem',
        lastName: 'Mulla',
        phone: '0912123123',
        parqQuoteID: 'R-206263H',
        desiredDeliveryDate: '2020-07-28',
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
        firstName: 'Ali',
        lastName: 'Jaber',
        phone: '0912123123',
        parqQuoteID: 'R-206263H',
        desiredDeliveryDate: '2020-02-20',
        brand: 'Cubeit',
        city: 'London',
        typeOfJob: 'Long Distance',
        status: 'New',
    },
    {
        id: 3,
        eventTime: '2015-05-24 18:32:46',
        lCode: 'L150',
        lengthOfStay: 3,
        firstName: 'Taha',
        lastName: 'Kassar',
        phone: '0912123123',
        parqQuoteID: 'R-206263H',
        desiredDeliveryDate: '2020-02-24',
        brand: 'Cubeit',
        city: 'Brampton',
        typeOfJob: 'Move_Store',
        status: 'Complated - Win',
    },
    {
        id: 4,
        eventTime: '2021-05-24 18:32:46',
        lCode: 'L130',
        lengthOfStay: 4,
        firstName: 'Ahmad',
        lastName: 'AlSaleh',
        phone: '0912123123',
        parqQuoteID: 'R-206263H',
        desiredDeliveryDate: '2021-06-20',
        brand: 'PUPS',
        city: 'London',
        typeOfJob: 'Move',
        status: 'Declined - Book For NADD',
    },
    {
        id: 5,
        eventTime: '2013-09-28 18:32:46',
        lCode: 'L190',
        lengthOfStay: 5,
        firstName: 'AbdAlkarem',
        lastName: 'Mulla',
        phone: '0912123123',
        parqQuoteID: 'R-206263H',
        desiredDeliveryDate: '2017-09-22',
        brand: 'PUPS',
        city: 'Brampton',
        typeOfJob: 'Move',
        status: 'New',
    },
    {
        id: 6,
        eventTime: '2019-03-24 18:32:46',
        lCode: 'L120',
        lengthOfStay: 6,
        firstName: 'Abd',
        lastName: 'Mulla',
        phone: '0912123123',
        parqQuoteID: 'R-206263H',
        desiredDeliveryDate: '2019-08-19',
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

export const brandArray = []
export const cityArray = []
export const typeOfJobArray = []
export const statusArray = []

rows.forEach(row => {
    if (brandArray.indexOf(row.brand) === -1) {
        brandArray.push(row.brand);
    }
    if (cityArray.indexOf(row.city) === -1) {
        cityArray.push(row.city);
    }
    if (typeOfJobArray.indexOf(row.typeOfJob) === -1) {
        typeOfJobArray.push(row.typeOfJob);
    }
    if (statusArray.indexOf(row.status) === -1) {
        statusArray.push(row.status);
    }
})

export const statusType = (type) => {
    if (type === 'Declined - Book For NADD') {
        return (<ClearTwoTone />)
    } else if (type === 'New') {
        return (<LocalShipping />)
    } else if (type === 'Complated - Win') {
        return (<Check />)
    }
};

export default rows