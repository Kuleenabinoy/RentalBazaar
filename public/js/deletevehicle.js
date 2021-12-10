const deleteClickHandler = async () => {
    console.log("delete");
    await fetch("/api/vehicle/${id}", {
        method: "DELETE",
    });
    document.location.replace("/vehicle");
};

document.querySelector("#deletebtn").addEventListener("click", deleteClickHandler);
