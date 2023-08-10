package com.calvoquijano;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class Connectivity {
    public static void main(String[] args) throws SQLException {
        //Crear la conexión
        Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/prueba", "root", "");
        //Crear el Statemt y el Query
        Statement stmt = con.createStatement();
        String s = "INSERT INTO student VALUES(1, 'PEDRO')";
        //Ejecutarlo
        stmt.execute(s);
        //Cerrar la conexión
        con.close();

        System.out.println("Query ejecutado");
    }
}
