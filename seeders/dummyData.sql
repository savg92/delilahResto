/* dummy users */
INSERT INTO delilahResto.users (firstName,lastname,userName,password,email,phone,address,isAdmin,createdAt,updatedAt) VALUES
	 ('admin','admin','aadmin','123','admin@admin.com','1123594837','av. siempre viva 123','admin',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
	 ('alex','fox','afox','123','afox@gmail.com','1123594352','av rivadavia 2423','client',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
	 ('jane','fox','jfox','123','jfox@gmail.com','1123594352','av rivadavia 1423','client',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
	 ('roxy','fox','rfox','123','rfox@gmail.com','1123594643','av rivadavia 634','client',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
	 ('ursula','fox','ufox','123','ufox@gmail.com','1123594352','av rivadavia 2423','client',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
	 ('otto','fox','ofox','123','ofox@gmail.com','1123594352','av rivadavia 1423','admin',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
	 ('toto','fox','tfox','123','tfox@gmail.com','1123594352','av rivadavia 1423','client',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
	 ('kevin','fox','kfox','123','kfox@gmail.com','1123594352','av rivadavia 1423','client',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
	 ('bacon','fox','bfox','123','bfox@gmail.com','1123594352','av rivadavia 1423','client',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
	 ('zully','fox','zfox','123','zfox@gmail.com','1123594352','av rivadavia 2423','client',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);


/* dummy products */
INSERT INTO delilahResto.products (productName,shortName,unitPrice,description,createdAt,updatedAt) VALUES
	 ('hamburguesa simple',NULL,550.00,'pan y carne',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
	 ('hamburguesa completa',NULL,730.00,'pan, carne, queso, huevo frito',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
	 ('pasta bolognesa',NULL,350.00,'spaghetti, salsa bolognesa',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
	 ('lasagna',NULL,500.00,'lasagna de carne',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
	 ('gnoquis',NULL,400.00,'gnoques de rucula con salsa blanca',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
	 ('atun',NULL,850.00,'atun en salsa blanca',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
	 ('atun a la parrilla',NULL,890.00,'atun a la parrilla',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);


/* dummy orders */
INSERT INTO delilahResto.orders (status,userId,totalPrice,paymentMethod,createdAt,updatedAt) VALUES
	 ('creado',1,1230.00,'tarjeta',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
	 ('creado',2,1230.00,'tarjeta',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
	 ('borrador',3,230.50,'tarjeta',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
	 ('entregado',4,2230.00,'efectivo',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
	 ('en camino',4,1560.40,'tarjeta',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
	 ('cancelado',2,930.00,'efectivo',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
	 ('cancelado',1,330.00,'efectivo',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);


/* dummy Items */
INSERT INTO delilahResto.items (orderId,productId,quantity,createdAt,updatedAt) VALUES
	 (3,1,3,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
	 (4,2,3,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
	 (5,1,5,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
	 (7,1,2,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);


/* dummy favorites */
INSERT INTO delilahResto.favorites (userId,productId,createdAt,updatedAt) VALUES
	 (1,1,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
	 (2,4,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
	 (3,5,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
	 (4,7,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
	 (2,1,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
	 (6,3,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
