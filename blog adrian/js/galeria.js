document.addEventListener('DOMContentLoaded', function (){
	let imagenes = [
		{img: 'img/galeria/imagen01.jpg'},
		{img: 'img/galeria/imagen02.jpg'},
		{img: 'img/galeria/imagen03.jpg'},
		{img: 'img/galeria/imagen04.jpg'},
		{img: 'img/galeria/imagen05.jpg'},
		{img: 'img/galeria/imagen06.jpg'},
		{img: 'img/galeria/imagen07.jpg'},
		{img: 'img/galeria/imagen08.jpg'},
		{img: 'img/galeria/imagen09.jpg'},
		{img: 'img/galeria/imagen10.jpg'},
		{img: 'img/galeria/imagen11.jpg'},
		{img: 'img/galeria/imagen12.jpg'},
		{img: 'img/galeria/imagen13.jpg'},
		{img: 'img/galeria/imagen14.jpg'},
		{img: 'img/galeria/imagen15.jpg'},
		{img: 'img/galeria/imagen16.jpg'},
		{img: 'img/galeria/imagen17.jpg'},
		{img: 'img/galeria/imagen18.jpg'},
		{img: 'img/galeria/imagen19.jpg'},
		{img: 'img/galeria/imagen20.jpg'},
		{img: 'img/galeria/imagen21.jpg'},
		{img: 'img/galeria/imagen22.jpg'},
		{img: 'img/galeria/imagen23.jpg'},
		{img: 'img/galeria/imagen24.jpg'},
		{img: 'img/galeria/imagen25.jpg'}
	]

	let contador = 0
	const contenedor = document.querySelector('.slideshow')
	const overlay = document.querySelector('.overlay')
	const galeria_imagenes = document.querySelectorAll('.galeria img')
	const img_slideshow = document.querySelector('.slideshow img')

	contenedor.addEventListener('click', function (event) {
		let atras = contenedor.querySelector('.atras'),
			adelante = contenedor.querySelector('.adelante'),
			img = contenedor.querySelector('img'),
			tgt = event.target

		if (tgt == atras) {
			if (contador > 0) {
				img.src = imagenes[contador - 1].img
				contador--
			} else {
				img.src = imagenes[imagenes.length - 1].img
				contador = imagenes.length - 1
			}
		} else if (tgt == adelante) {
			if (contador < imagenes.length - 1) {
				img.src = imagenes[contador + 1].img
				contador++
			} else {
				img.src = imagenes[0].img
				contador = 0
			}
		}

	} )

	Array.from(galeria_imagenes).forEach(img => {
		img.addEventListener('click', event => {
			const imagen_seleccionada = +event.target.dataset.imgMostrar
			img_slideshow.src = imagenes[imagen_seleccionada].img
			contador = imagen_seleccionada
			overlay.style.opacity = 1
			overlay.style.visibility = 'visible'
		})
	})
		document.querySelector('.btn_cerrar').addEventListener('click', () => {
			overlay.style.opacity = 0
			overlay.style.visibility = 'hidden'
		})
		
	})
