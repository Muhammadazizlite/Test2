CREATE DATABASE carShop;
USE carshop;
CREATE TABLE Cars(
    id BIGINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    cost DECIMAL(8, 2) NOT NULL
);
CREATE TABLE Customers(
    id BIGINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    contact TEXT NOT NULL
);
CREATE TABLE Orders(
    id BIGINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    usersId BIGINT NOT NULL,
    carId BIGINT NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY(usersId) REFERENCES Customers(id),
    FOREIGN KEY(carId) REFERENCES Cars(id)
);
CREATE TABLE Months(
    id BIGINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    foiz VARCHAR(10) NOT NULL
);
CREATE TABLE Payment(
    id BIGINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    summa BIGINT NOT NULL,
    date DATE NOT NULL,
    order_id BIGINT NOT NULL,
    month_id BIGINT NOT NULL,
    FOREIGN KEY(order_id) REFERENCES Orders(id),
    FOREIGN KEY(month_id) REFERENCES Months(id)
);
INSERT INTO Months(name,foiz) VALUES
("1-oy","15%"),
("3-oy","30%"),
("6-oy","55%");

INSERT INTO Cars (name, cost) VALUES 
('Toyota Corolla', 20000.00),
('Honda Civic', 25000.00),
('BMW X5', 50000.00),
('Tesla Model 3', 45000.00),
('Chevrolet Malibu', 22000.00);

INSERT INTO Customers (name, contact) VALUES 
('Ali Karimov', 'ali.karimov@gmail.com'),
('Dilshodbek Tursunov', '+998912345678'),
('Oydinbek Sabirov', 'oydin.sabirov@mail.ru'),
('Gulchehra Mirmukhamedova', '+998931234567'),
('Bexruz Khamidov', 'bexruz.khamidov@mail.com');

INSERT INTO Orders (usersId, carId, quantity) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 3, 1),
(4, 4, 1),
(5, 5, 3);




INSERT INTO Payment (summa, date, order_id, month_id) VALUES 
(20000, '2025-05-01', 1, 1),
(50000, '2025-05-02', 2, 1),
(50000, '2025-05-03', 3, 1),
(45000, '2025-05-04', 4, 1),
(66000, '2025-05-05', 5, 1),
(20000, '2025-05-01', 1, 2),
(50000, '2025-05-02', 2, 2),
(50000, '2025-05-03', 3, 2),
(45000, '2025-05-04', 4, 2),
(66000, '2025-05-05', 5, 2),
(20000, '2025-05-01', 1, 3),
(50000, '2025-05-02', 2, 3),
(50000, '2025-05-03', 3, 3),
(45000, '2025-05-04', 4, 3),
(66000, '2025-05-05', 5, 3);
