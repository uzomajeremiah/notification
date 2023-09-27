let noOfNotification = document.querySelector('.three').innerText
// console.log(noOfNotification);

function readAll() {
  let three = document.querySelector('.three')
    if (three.innerText > 0) {
      three.innerText = 0
      addClass()
    } else if (three.innerText = 3) {
      three.innerText = noOfNotification
      removeClass()
    };
function addClass() {
  let notifyDiv = document.querySelectorAll('.notification');

  notifyDiv.forEach(function(notify) {
      notify.classList.add('read-message');
      notify.classList.remove('unread')
  })
  let readd = document.querySelectorAll('#fa-circle');

  readd.forEach(function(doneReading) {
      doneReading.classList.remove('fa-circle')
  })
  document.querySelector('.mark-as').innerText = 'Mark all as unread'
};
  
function removeClass() {
  let notifyDiv = document.querySelectorAll('.notification');

  notifyDiv.forEach(function(notify) {
      notify.classList.add('unread');
      notify.classList.remove('read-message')
  })
  
  let readd = document.querySelectorAll('#fa-circle');

  readd.forEach(function(doneReading) {
      doneReading.classList.add('fa-circle')
  })
  document.querySelector('.mark-as').innerText = 'Mark all as read'

};
  
}