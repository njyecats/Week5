class NotificationSender {
    constructor(status) {
        this.status = status;
    }
    sendNotification(notification) {
        console.log('Sending: ' + notification);
    }

   findUsersWithStatus(status)  {
    let users = getUsers(status);
    return users;
}
}
class PromotionSender extends NotificationSender{
    constructor(status) {
    super(status);   
   }
calculateDiscount(status) {
    if (status === 'GOLD') {
        return .3;
    }else if (status === 'SILVER') {
        return .15;
    }
    return 0;

}
}

class CollectionsSender extends NotificationSender {
    constructor (status) {
        super(status);

    }
    calculateFee(status)  {
    if (status === 'OVERDUE') {
        return 10;
        } else if(status === 'DELINQUENT') {
            return 25; 
        }
        return 5;
}
}

let collectionsSender = new CollectionsSender('OVERDUE');
collectionsSender.sendNotification('this is a test collections notification.');