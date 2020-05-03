app.controller('comicModalInstanceCtrl', function ($scope, $uibModalInstance, comicinfo) {


    $scope.title = comicinfo.title;


    $scope.issue = comicinfo.issue;


    $scope.slidesHooty1 = [{ id: 0, image: 'comics/hooty/1/0.jpg', text: 'The Adventures of Hooty by Ivan Fortenberry' },
        { id: 1, image: 'comics/hooty/1/1.jpg', text: 'Hooty was going to his friend\'s house' },
        { id: 2, image: 'comics/hooty/1/2.jpg', text: 'He was having a play date at his friend\'s house' },
         { id: 3, image: 'comics/hooty/1/3.jpg', text: 'When suddenlty...CRACK' },
    { id: 4, image: 'comics/hooty/1/4.jpg', text: 'His friend flew off' },
{ id: 5, image: 'comics/hooty/1/5.jpg', text: 'He wondered why his friend flew off!' },
{ id: 6, image: 'comics/hooty/1/6.jpg', text: 'Then Evil Hoot was there' },
{ id: 7, image: 'comics/hooty/1/7.jpg', text: 'Evil Hoot attacked Hooty' },
{ id: 8, image: 'comics/hooty/1/8.jpg', text: 'He dodged' },
{ id: 9, image: 'comics/hooty/1/9.jpg', text: 'But it gave him super powers' },
{ id: 10, image: 'comics/hooty/1/10.jpg', text: 'He beat Evil Hoot up' },
{ id: 11, image: 'comics/hooty/1/11.jpg', text: 'The End' }




    ];

    $scope.slidesHooty2 = [{ id: 0, image: 'comics/hooty/2/0.jpg', text: 'Hooty and Revenge of Evil Hoot' },
       { id: 1, image: 'comics/hooty/2/1.jpg', text: 'Hooty met his friend at a playground' },
       { id: 2, image: 'comics/hooty/2/2.jpg', text: 'Just then they heard a noise...CRASH' },
        { id: 3, image: 'comics/hooty/2/3.jpg', text: 'His friend didn\'t leave this time' },
   { id: 4, image: 'comics/hooty/2/4.jpg', text: 'It was Evil Hoot and a Robot' },
{ id: 5, image: 'comics/hooty/2/5.jpg', text: 'They attacked' },
{ id: 6, image: 'comics/hooty/2/6.jpg', text: 'Hooty also attacked' },
{ id: 7, image: 'comics/hooty/2/7.jpg', text: 'It was close but it missed so Hooty\'s friend got super powers' },
{ id: 8, image: 'comics/hooty/2/8.jpg', text: 'They combined their powers' },
{ id: 9, image: 'comics/hooty/2/9.jpg', text: 'Then they took Evil Hoot to jail' },
{ id: 10, image: 'comics/hooty/2/10.jpg', text: 'The End' }



    ];

    $scope.slidesHooty3 = [{ id: 0, image: 'comics/hooty/3/0.jpg', text: 'The Owl Knight' },
       { id: 1, image: 'comics/hooty/3/1.jpg', text: 'Hooty was watching over the city' },
       { id: 2, image: 'comics/hooty/3/2.jpg', text: 'Just then Evil Hoot arrived' },
        { id: 3, image: 'comics/hooty/3/3.jpg', text: 'Hooty called his friends' },
   { id: 4, image: 'comics/hooty/3/4.jpg', text: 'They came!' },
{ id: 5, image: 'comics/hooty/3/5.jpg', text: 'And saved Hooty!' },
{ id: 6, image: 'comics/hooty/3/6.jpg', text: 'Evil Hoot flew after them' },
{ id: 7, image: 'comics/hooty/3/7.jpg', text: 'They started going down' },
{ id: 8, image: 'comics/hooty/3/8.jpg', text: 'And they used their powers' },
{ id: 9, image: 'comics/hooty/3/9.jpg', text: 'But the robot shot itself and broke' },
{ id: 10, image: 'comics/hooty/3/10.jpg', text: 'Now it was daytime' },
{ id: 11, image: 'comics/hooty/3/11.jpg', text: 'The End' }




    ];

    $scope.slidesHooty4 = [{ id: 0, image: 'comics/hooty/4/0.jpg', text: 'A New Rival' },
       { id: 1, image: 'comics/hooty/4/1.jpg', text: 'Hooty had his friend come for a playdate' },
       { id: 2, image: 'comics/hooty/4/2.jpg', text: 'When suddenly...CRASH' },
        { id: 3, image: 'comics/hooty/4/3.jpg', text: 'They were expecting it to be Evil Hoot but it wasn\'t' },
   { id: 4, image: 'comics/hooty/4/4.jpg', text: 'His name was Shadow Hoot' },
{ id: 5, image: 'comics/hooty/4/5.jpg', text: 'All three of them attacked' },
{ id: 6, image: 'comics/hooty/4/6.jpg', text: 'He charged' },
{ id: 7, image: 'comics/hooty/4/7.jpg', text: 'And there was Shadow Shadow Hoot' },
{ id: 8, image: 'comics/hooty/4/8.jpg', text: 'Then Hooty got an idea' },
{ id: 9, image: 'comics/hooty/4/9.jpg', text: 'He called for their thrid friend' },
{ id: 10, image: 'comics/hooty/4/10.jpg', text: 'When SUDDENLY!' },
{ id: 11, image: 'comics/hooty/4/11.jpg', text: 'The End' }




    ];


    $scope.close = function () {
        $uibModalInstance.dismiss('cancel');
    };
});


app.controller('creatorModalInstanceCtrl', function ($scope, $uibModalInstance, creatorinfo) {


    $scope.close = function () {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.name ='ivan';


});
