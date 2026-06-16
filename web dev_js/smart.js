const rawData = [
  "A10|Tomatoes|5|2027-01-01",        // no zone field
  "B21|Bananas|10|2027-01-01|fridge", // zone: "fridge"
  "C32|Eggs|3|2027-01-01|pantry",     // zone: "pantry"
];
const pantry = [
  {
    sku: "A10",
    name: "Tomatoes",
    qty: 20,
    expires: "2026-12-01",
    zone: "general"
  },
  {
    sku: "C32",
    name: "Eggs",
    qty: 12,
    expires: "2026-11-15",
    zone: "pantry"
  }
];

function parseShipment(rawData) {
    let arr = [];
    for (const data of rawData) {

        let Data = data.split("|");
        let sku = Data[0];
        let name = Data[1];
        let qty = Number(Data[2]);
        let expires = Data[3];
        let zone = Data[4] || "general";

        let obj = {
            sku: sku,
            qty: qty,
            expires: expires,
            name: name,
            zone: zone
        };

        let existing = arr.find(obj => obj.sku === sku)
        if (existing) {
            continue;
        }
        arr.push(obj);
    }
    return arr;
}
function planRestock(pantry, shipment) {
    let arr = [];
    for (const ship of shipment) {
        if (ship.qty <= 0) {
           let obj = {
                type: "discard",
                item: ship
            };
            arr.push(obj);
        }
        else {
            let existing = pantry.find(obj => obj.sku === ship.sku);
            if (existing) {
                let obj = {
                    type: "restock",
                    item: ship
                };
                arr.push(obj);
            }
            else {
                let obj = {
                    type: "donate",
                    item: ship
                };
                arr.push(obj);
            }
        }
    }
    return arr;
}
function clonePantry(pantry) {
    let arr = [];

    for (const item of pantry) {
        let obj = {
            sku: item.sku,
            qty: item.qty,
            expires: item.expires,
            name: item.name,
            zone: item.zone
        };

        arr.push(obj);
    }

    return arr;
}
function groupByZone(actions) {
    let grouped = {};

    for (const action of actions) {
        const zone = action.item.zone;
        if (!grouped[zone]) {
            grouped[zone] = [];
        }
        grouped[zone].push(action);
    }

    return grouped;
}
const pantryCopy = clonePantry(pantry);

const parsedShipment = parseShipment(rawData);

const actions = planRestock(
    pantryCopy,
    parsedShipment
);

const grouped = groupByZone(actions);

console.log(grouped);