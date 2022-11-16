package org.com.proyecto.geekmitive.service;

import org.com.proyecto.geekmitive.entity.Usuario;
import org.com.proyecto.geekmitive.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//@Service
public class UsuarioService {
	
	//@Autowired
	UsuarioRepository usuarioRepository;
	public Iterable <Usuario> getAllUsuario(){
		return usuarioRepository.findAll();
	}

}

