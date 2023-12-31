const getRoom = async (roomNum) => {
  const response = await fetch("http://localhost:3000/api/room/" + roomNum);
  return await response.json();
};

const setDescription = (description) => {
  const descritionEl = document.querySelector(".room-info");
  descritionEl.innerHTML = description;
};
const setImage = (roomNum) => {
  const sourceImg = document.querySelector(".roomimage");
  sourceImg.src = "http://localhost:3000/api/room-img/" + roomNum + ".jpg";
}
const updateHtmlWithRoomData = (room) => {
  const arrowN = document.querySelector(".arrow-N");
  const arrowE = document.querySelector(".arrow-E");
  const arrowS = document.querySelector(".arrow-S");
  const arrowW = document.querySelector(".arrow-W");
  setDescription(room.description);
  setImage(room.room_number)

  if (room.N) {
    console.log("got N");
    // enable N button and attach right eventhandler to it.

    arrowN.disabled = false
    arrowN.onclick = async (e) => {
      const newRoom = await getRoom(room.N.to_room);
      updateHtmlWithRoomData(newRoom)

    };
  } else {
    arrowN.disabled = true
  }
  if (room.E) {
    console.log("got E");

    arrowE.disabled = false
    arrowE.onclick = async (e) => {
      const newRoom = await getRoom(room.E.to_room);
      updateHtmlWithRoomData(newRoom)
    };
  } else {
    arrowE.disabled = true
  }
  if (room.S) {
    console.log("got S");

    arrowS.disabled = false
    arrowS.onclick = async (e) => {
      const newRoom = await getRoom(room.S.to_room);
      updateHtmlWithRoomData(newRoom)
    };
  } else {
    arrowS.disabled = true
  }
  if (room.W) {
    console.log("got W");

    arrowW.disabled = false
    arrowW.onclick = async (e) => {
      const newRoom = await getRoom(room.W.to_room);
      updateHtmlWithRoomData(newRoom)
    };
  } else {
    arrowW.disabled = true
  }

};

const initWithFirstRoom = () => {
  const firstRoomPromise = getRoom(0);
  firstRoomPromise.then((firstRoom) => {
    console.log("firstRoom", firstRoom);
    updateHtmlWithRoomData(firstRoom);
  });
};

initWithFirstRoom()