package com.calvoquijano;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

public class Conexion {
    String url = "";
    String user = "";
    String pw = "";
    String driver = "com.mysql.cj.jdbc.Driver";
    static Connection con;
    public Conexion(){

    }

    public Connection conectar(){
        try {
            Class.forName(driver);
            con = DriverManager.getConnection(url, user, pw);
            System.out.println("conectada");
        } catch (Exception e) {
            System.out.println("Error!");
        }
        return con;
    }
    public void desconectar(){
        try {
            con.close();
        } catch (Exception e) {
            System.out.println("Error!");
        }
    }
    private static final String SQL_CREATE_TABLE = "DROP TABLE IF EXISTS ANIMALES; CREATE TABLE ANIMALES"
            + "("
            + " ID INT PRIMARY KEY, "
            + " NOMBRE varchar(100) NOT NULL "
            + " )";
    public static void main(String[] args) {
        Conexion conexion = new Conexion();
        conexion.conectar();

        try {
            Statement statementCreate = con.createStatement();
            statementCreate.execute(SQL_CREATE_TABLE);
            conexion.desconectar();
        } catch (Exception e) {
            System.out.println("Error!");
        } finally {
            System.out.println("Finally!");
        }


    }
}
