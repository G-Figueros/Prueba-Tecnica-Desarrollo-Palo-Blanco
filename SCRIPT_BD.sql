CREATE DATABASE Palo_Blanco;
USE Palo_Blanco;

CREATE TABLE inversionista (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    inversion DECIMAL(10,2) NOT NULL,
    imagen_base64 LONGTEXT
);


DELIMITER //
CREATE PROCEDURE SP_GET_INVERSIONISTAS()
BEGIN
    SELECT id, nombre, apellido, inversion, imagen_base64
    FROM inversionista
    ORDER BY id DESC;
END //
DELIMITER ;

DELIMITER //
CREATE FUNCTION FN_ESTADO_INVERSIONISTA(p_id INT)
RETURNS VARCHAR(10)
DETERMINISTIC
BEGIN
    DECLARE v_estado VARCHAR(10);
    IF MOD(p_id, 2) = 0 THEN
        SET v_estado = 'Activo';
    ELSE
        SET v_estado = 'Inactivo';
    END IF;
    RETURN v_estado;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE SP_GET_INVERSIONISTAS()
BEGIN
    SELECT 
        id,
        nombre,
        apellido,
        inversion,
        imagen_base64,
        FN_ESTADO_INVERSIONISTA(id) AS estado
    FROM inversionista
    ORDER BY id DESC;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE SP_INVERSIONISTAS_MAYOR()
BEGIN
    SELECT 
        id,
        nombre,
        apellido,
        inversion,
        imagen_base64,
        FN_ESTADO_INVERSIONISTA(id) AS estado
    FROM inversionista
    WHERE inversion > 15000
    ORDER BY inversion DESC;
END //
DELIMITER ;




