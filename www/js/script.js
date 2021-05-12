let dataList = {
   list: [
   ],

   currentId: 1,

}

const listData = document.querySelector('.list');

const saveBtn = document.querySelector('.save');

const addBtn = document.querySelector('.btn-add');

const readName = document.querySelector('.order-name input');
const readAddress = document.querySelector('.order-address input');
const readObjectName = document.querySelector('.object-name input');
const readLocation = document.querySelector('.object-location input');
const readAppoin = document.querySelector('.object-appoin input');
const readPower = document.querySelector('.power input');



function addItem(obj) {
   listData.innerHTML = '';
   obj.list.forEach(e => {
      let list = ` <tr>
                  <td>${e.id}</td>
                  <td>${e.orderName}</td>
                  <td>${e.orderAddress}</td>
                  <td>${e.objectName}</td>
                  <td>${e.objectLocation}</td>
                  <td>${e.objectApoint}</td>
                  <td>${e.power}</td>
                  <td>${e.sortIsuuance}</td>
                  <td>${e.sortDoc}</td>
                  <td>${e.date}</td>
               </tr>`
      listData.insertAdjacentHTML("beforeend", list)
   })
}
function setValueToRead() {
   const readNameValue = document.querySelector('.order-name-fill input').value;
   const readAddressValue = document.querySelector('.order-address-fill input').value;
   const readObjectNameValue = document.querySelector('.object-name-fill input').value;
   const readLocationValue = document.querySelector('.object-location-fill input').value;
   const readAppoinValue = document.querySelector('.object-appoin-fill input').value;
   const readPowerValue = document.querySelector('.power-fill input').value;

   readName.value = readNameValue
   readAddress.value = readAddressValue
   readObjectName.value = readObjectNameValue
   readLocation.value = readLocationValue
   readAppoin.value = readAppoinValue
   readPower.value = readPowerValue

   document.querySelector('.declar input').value = dataList.currentId;
   console.log($('#miniModal:visible').length);
   $('#miniModal').modal('hide')


}

function setItem() {
   const date = document.querySelector('.date').value
   const selectedAppoin = document.querySelectorAll('.issuance input:checked');
   const selectedDocument = document.querySelectorAll('.document input:checked');
   let appoinItems = Array.from(selectedAppoin).map(e => e.closest('label').innerText).join(',');
   let documentItems = Array.from(selectedDocument).map(e => e.closest('label').innerText).join(',')

   let item = { id: dataList.currentId, orderName: readName.value, orderAddress: readAddress.value, objectName: readObjectName.value, objectLocation: readLocation.value, objectApoint: readPower.value, power: readPower.value + ' кВт', sortIsuuance: appoinItems, sortDoc: documentItems, date: date };
   dataList.list.push(item);
   dataList.currentId++;
   addItem(dataList)
   $('#largeModal').modal('hide')


}
addItem(dataList);


saveBtn.addEventListener('click', setValueToRead)

addBtn.addEventListener('click', setItem)



$(document).on('hidden.bs.modal', function (event) {
   if ($('#largeModal:visible').length) {
      $('body').addClass('modal-open');
   }
})