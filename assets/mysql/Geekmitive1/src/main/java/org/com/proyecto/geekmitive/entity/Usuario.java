package org.com.proyecto.geekmitive.entity;

import javax.persistence.*;

@Table(name = "endereco")
@Entity
public class Usuario {
	
	 @Id
	 @GeneratedValue(strategy=GenerationType.IDENTITY)
	
      @Column(name="id_usuario")
	  private Long id_usuario;
	 
	  //@Column(name="first_name")
	  private String nickname;
	  
	  //@Column(name="correo")
	  private String correo;
	  
	  //@Column(name="password")
	  private String password;
	  
	  
	  //@Column(name="telefono")
	  private String telefono;


	public Long getId_usuario() {
		return id_usuario;
	}


	public void setId_usuario(Long id_usuario) {
		this.id_usuario = id_usuario;
	}


	public String getNickname() {
		return nickname;
	}


	public void setNickname(String nickname) {
		this.nickname = nickname;
	}


	public String getCorreo() {
		return correo;
	}


	public void setCorreo(String correo) {
		this.correo = correo;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getTelefono() {
		return telefono;
	}


	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	  
	  

}
