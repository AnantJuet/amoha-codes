import React from 'react';

const DesignParkingLot: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Design Parking Lot System
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A parking lot system manages vehicle parking with features like spot allocation, payment processing,
      and real-time availability tracking. This is a classic Low-Level Design (LLD) interview question.
    </p>

    <h2 className="text-2xl font-bold mt-6">Requirements</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold text-blue-800">Functional</h4>
        <ul className="text-sm mt-2 space-y-1">
          <li>• Multiple floors and parking spots</li>
          <li>• Different spot sizes (compact, regular, large)</li>
          <li>• Support different vehicle types</li>
          <li>• Issue parking tickets</li>
          <li>• Calculate and process payments</li>
          <li>• Display available spots</li>
        </ul>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold text-green-800">Non-Functional</h4>
        <ul className="text-sm mt-2 space-y-1">
          <li>• Handle concurrent entries/exits</li>
          <li>• Real-time availability</li>
          <li>• Scalable to multiple lots</li>
          <li>• Fault tolerant</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Class Diagram</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <pre className="text-xs overflow-x-auto">
{`┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   ParkingLot    │────▶│  ParkingFloor   │────▶│  ParkingSpot    │
├─────────────────┤     ├─────────────────┤     ├─────────────────┤
│ - id            │     │ - floorNumber   │     │ - spotNumber    │
│ - floors[]      │     │ - spots[]       │     │ - spotType      │
│ - entrances[]   │     │ - displayBoard  │     │ - isOccupied    │
│ - exits[]       │     ├─────────────────┤     │ - vehicle       │
├─────────────────┤     │ + getAvailable()│     ├─────────────────┤
│ + getAvailable()│     │ + parkVehicle() │     │ + assignVehicle │
│ + parkVehicle() │     └─────────────────┘     │ + removeVehicle │
└─────────────────┘                             └─────────────────┘
        │
        │              ┌─────────────────┐     ┌─────────────────┐
        └─────────────▶│    Ticket       │────▶│    Vehicle      │
                       ├─────────────────┤     ├─────────────────┤
                       │ - ticketId      │     │ - licensePlate  │
                       │ - entryTime     │     │ - vehicleType   │
                       │ - exitTime      │     └─────────────────┘
                       │ - parkingSpot   │
                       │ - vehicle       │     ┌─────────────────┐
                       │ - payment       │────▶│    Payment      │
                       └─────────────────┘     ├─────────────────┤
                                               │ - amount        │
                                               │ - paymentTime   │
                                               │ - paymentMethod │
                                               └─────────────────┘`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Enums
const VehicleType = {
    MOTORCYCLE: 'MOTORCYCLE',
    CAR: 'CAR',
    BUS: 'BUS',
    TRUCK: 'TRUCK'
};

const SpotType = {
    COMPACT: 'COMPACT',      // Motorcycle
    REGULAR: 'REGULAR',      // Car
    LARGE: 'LARGE'           // Bus, Truck
};

const PaymentStatus = {
    PENDING: 'PENDING',
    COMPLETED: 'COMPLETED',
    FAILED: 'FAILED'
};

// Vehicle class
class Vehicle {
    constructor(licensePlate, vehicleType) {
        this.licensePlate = licensePlate;
        this.vehicleType = vehicleType;
    }
}

// Parking Spot
class ParkingSpot {
    constructor(spotNumber, spotType, floorNumber) {
        this.spotNumber = spotNumber;
        this.spotType = spotType;
        this.floorNumber = floorNumber;
        this.isOccupied = false;
        this.vehicle = null;
    }

    canFitVehicle(vehicleType) {
        const spotSize = { COMPACT: 1, REGULAR: 2, LARGE: 3 };
        const vehicleSize = {
            MOTORCYCLE: 1, CAR: 2, BUS: 3, TRUCK: 3
        };
        return spotSize[this.spotType] >= vehicleSize[vehicleType];
    }

    assignVehicle(vehicle) {
        if (this.isOccupied) return false;
        this.vehicle = vehicle;
        this.isOccupied = true;
        return true;
    }

    removeVehicle() {
        this.vehicle = null;
        this.isOccupied = false;
    }
}

// Parking Floor
class ParkingFloor {
    constructor(floorNumber, spotsConfig) {
        this.floorNumber = floorNumber;
        this.spots = new Map();
        this.availableSpots = {
            COMPACT: [],
            REGULAR: [],
            LARGE: []
        };

        this._initializeSpots(spotsConfig);
    }

    _initializeSpots(config) {
        let spotNumber = 1;
        for (const [type, count] of Object.entries(config)) {
            for (let i = 0; i < count; i++) {
                const spot = new ParkingSpot(spotNumber, type, this.floorNumber);
                this.spots.set(spotNumber, spot);
                this.availableSpots[type].push(spot);
                spotNumber++;
            }
        }
    }

    getAvailableSpot(vehicleType) {
        const typePreference = this._getSpotPreference(vehicleType);

        for (const spotType of typePreference) {
            if (this.availableSpots[spotType].length > 0) {
                return this.availableSpots[spotType][0];
            }
        }
        return null;
    }

    _getSpotPreference(vehicleType) {
        switch (vehicleType) {
            case VehicleType.MOTORCYCLE:
                return [SpotType.COMPACT, SpotType.REGULAR, SpotType.LARGE];
            case VehicleType.CAR:
                return [SpotType.REGULAR, SpotType.LARGE];
            case VehicleType.BUS:
            case VehicleType.TRUCK:
                return [SpotType.LARGE];
            default:
                return [];
        }
    }

    parkVehicle(spot, vehicle) {
        if (spot.assignVehicle(vehicle)) {
            const index = this.availableSpots[spot.spotType]
                .findIndex(s => s.spotNumber === spot.spotNumber);
            if (index > -1) {
                this.availableSpots[spot.spotType].splice(index, 1);
            }
            return true;
        }
        return false;
    }

    removeVehicle(spot) {
        spot.removeVehicle();
        this.availableSpots[spot.spotType].push(spot);
    }
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Parking Lot & Ticket System</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Parking Ticket
class ParkingTicket {
    static ticketCounter = 0;

    constructor(vehicle, spot) {
        this.ticketId = \`T-\${++ParkingTicket.ticketCounter}\`;
        this.vehicle = vehicle;
        this.spot = spot;
        this.entryTime = new Date();
        this.exitTime = null;
        this.payment = null;
    }

    calculateFee(rates) {
        const hours = Math.ceil(
            (this.exitTime - this.entryTime) / (1000 * 60 * 60)
        );
        return hours * rates[this.spot.spotType];
    }
}

// Main Parking Lot Class
class ParkingLot {
    static instance = null;

    constructor(config) {
        if (ParkingLot.instance) {
            return ParkingLot.instance;
        }

        this.name = config.name;
        this.floors = [];
        this.activeTickets = new Map();  // ticketId -> ticket
        this.vehicleTickets = new Map(); // licensePlate -> ticket
        this.rates = config.rates || {
            COMPACT: 2,
            REGULAR: 3,
            LARGE: 5
        };

        this._initializeFloors(config.floors);
        ParkingLot.instance = this;
    }

    static getInstance() {
        return ParkingLot.instance;
    }

    _initializeFloors(floorsConfig) {
        floorsConfig.forEach((config, index) => {
            this.floors.push(new ParkingFloor(index + 1, config));
        });
    }

    // Entry: Park a vehicle
    parkVehicle(vehicle) {
        // Check if vehicle already parked
        if (this.vehicleTickets.has(vehicle.licensePlate)) {
            throw new Error('Vehicle already parked');
        }

        // Find available spot
        const spot = this._findAvailableSpot(vehicle.vehicleType);
        if (!spot) {
            throw new Error('No available spot');
        }

        // Park and create ticket
        const floor = this.floors[spot.floorNumber - 1];
        floor.parkVehicle(spot, vehicle);

        const ticket = new ParkingTicket(vehicle, spot);
        this.activeTickets.set(ticket.ticketId, ticket);
        this.vehicleTickets.set(vehicle.licensePlate, ticket);

        return ticket;
    }

    _findAvailableSpot(vehicleType) {
        for (const floor of this.floors) {
            const spot = floor.getAvailableSpot(vehicleType);
            if (spot) return spot;
        }
        return null;
    }

    // Exit: Remove vehicle and process payment
    exitVehicle(ticketId, paymentMethod) {
        const ticket = this.activeTickets.get(ticketId);
        if (!ticket) {
            throw new Error('Invalid ticket');
        }

        ticket.exitTime = new Date();
        const fee = ticket.calculateFee(this.rates);

        // Process payment
        const payment = this._processPayment(fee, paymentMethod);
        ticket.payment = payment;

        // Remove vehicle from spot
        const floor = this.floors[ticket.spot.floorNumber - 1];
        floor.removeVehicle(ticket.spot);

        // Clean up
        this.activeTickets.delete(ticketId);
        this.vehicleTickets.delete(ticket.vehicle.licensePlate);

        return { ticket, fee, payment };
    }

    _processPayment(amount, method) {
        return {
            amount,
            method,
            status: PaymentStatus.COMPLETED,
            timestamp: new Date()
        };
    }

    // Display available spots
    getAvailability() {
        return this.floors.map(floor => ({
            floor: floor.floorNumber,
            available: {
                compact: floor.availableSpots.COMPACT.length,
                regular: floor.availableSpots.REGULAR.length,
                large: floor.availableSpots.LARGE.length
            }
        }));
    }
}

// Usage Example
const lot = new ParkingLot({
    name: 'City Center Parking',
    floors: [
        { COMPACT: 10, REGULAR: 20, LARGE: 5 },
        { COMPACT: 10, REGULAR: 20, LARGE: 5 }
    ],
    rates: { COMPACT: 2, REGULAR: 3, LARGE: 5 }
});

const car = new Vehicle('ABC-123', VehicleType.CAR);
const ticket = lot.parkVehicle(car);
console.log('Ticket:', ticket.ticketId);
console.log('Availability:', lot.getAvailability());

// Later...
const result = lot.exitVehicle(ticket.ticketId, 'CREDIT_CARD');
console.log('Fee:', result.fee);`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Design Patterns Used</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Singleton:</strong> Single ParkingLot instance</li>
      <li><strong>Factory:</strong> Create different vehicle/spot types</li>
      <li><strong>Strategy:</strong> Different payment methods</li>
      <li><strong>Observer:</strong> Display board updates</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Concurrency Handling</h2>
    <div className="bg-yellow-50 p-4 rounded-lg">
      <p className="font-semibold">Thread Safety Considerations:</p>
      <ul className="list-disc list-inside mt-2 text-sm space-y-1">
        <li>Use locks when assigning spots (prevent double booking)</li>
        <li>Atomic operations for ticket generation</li>
        <li>Transaction for payment processing</li>
        <li>Read-write locks for availability display</li>
      </ul>
    </div>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
      <p className="text-blue-700">
        <strong>Interview Tip:</strong> Focus on SOLID principles, extensibility (adding new vehicle types),
        and handling edge cases (lot full, invalid ticket, payment failure).
      </p>
    </div>
  </div>
);

export default DesignParkingLot;
