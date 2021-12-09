const VehicleFormHandler = async (event) => {
    event.preventDefault();
    const model = document.getElementById("model").value.trim();
    const color = document.getElementById("color").value.trim();
    const year = document.getElementById("year").value.trim();
    const license_plate = document.getElementById("licenseplate").value.trim();
    const registration_expiration = document.getElementById("registrationexpiry").value.trim();
    const insurance_expiration = document.getElementById("insuranceexpiry").value.trim();
    const image_url = "";
    const price = document.getElementById("price").value.trim();
    const available = document.getElementById("available").checked;
    const user_id = document.getElementById("userid").value.trim();
    const category_id = document.getElementById("categoryid").value.trim();
    console.log(available);
    if (
        !model ||
        !color ||
        !year ||
        !license_plate ||
        !registration_expiration ||
        !insurance_expiration ||
        !price ||
        //!available ||
        !user_id ||
        !category_id
    ) {
        alert("all fields are needed");
        return;
    }

    const response = await fetch(`/api/vehicle/addvehicle`, {
        method: "POST",
        body: JSON.stringify({
            model,
            color,
            year,
            license_plate,
            registration_expiration,
            insurance_expiration,
            image_url,
            price,
            available,
            user_id,
            category_id,
        }),
        headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
        document.location.replace("/homepage");
    } else {
        alert("Please check all your data is correct");
    }
};

document.querySelector("#addvehiclebtn").addEventListener("click", VehicleFormHandler);
