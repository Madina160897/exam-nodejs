const idCar = document.querySelector("#id_car").value;
    const idUser = document.querySelector("#id_user").value;
    
    const payload = {
        newOwnerId: idUser,
        carId: idCar,
        
    };
    fetch(BASE_URL + "/cars/changeOwner", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "post",
        body: JSON.stringify(payload)
    })
        .then(() => drawCars())
        .catch(() => alert("err"));