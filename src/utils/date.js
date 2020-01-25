import moment from 'moment';

export const convertDate = date => {
    return moment(date, 'YYYY-MM-DD').format('MMM DD.YYYY');
};
