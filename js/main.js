const app = new Vue({
	el: '#root',
	data: {
		currentIndex: 0,
		autoplayID: null,
		images: [
			{
				src: "https://i0.wp.com/www.meganerd.it/wp-content/uploads/2021/10/squid-game-1-1-e1633733959751.jpg?fit=1280%2C899&ssl=1",
				title: "Titolo Slide 1",
				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nostrum non voluptates eligendi unde obcaecati minima, aut, blanditiis voluptatibus laborum delectus dignissimos necessitatibus earum explicabo ut voluptatum. Doloribus, perferendis in."
			},
			{
				src: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ok-squidgame-season1-episode1-00-44-44-16-1634548372.jpg",
				title: "Titolo Slide 2",
				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nostrum non voluptates eligendi unde obcaecati minima, aut, blanditiis voluptatibus laborum delectus dignissimos necessitatibus earum explicabo ut voluptatum. Doloribus, perferendis in."
			},
			{
				src: "https://www.lascimmiapensa.com/wp-content/uploads/2021/10/squid-game-10.jpg",
				title: "Titolo Slide 3",
				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nostrum non voluptates eligendi unde obcaecati minima, aut, blanditiis voluptatibus laborum delectus dignissimos necessitatibus earum explicabo ut voluptatum. Doloribus, perferendis in."
			},
			{
				src: "https://st.ilfattoquotidiano.it/wp-content/uploads/2021/10/21/squidgame0011200.jpg",
				title: "Titolo Slide 4",
				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nostrum non voluptates eligendi unde obcaecati minima, aut, blanditiis voluptatibus laborum delectus dignissimos necessitatibus earum explicabo ut voluptatum. Doloribus, perferendis in."
			},
			{
				src: "https://www.rollingstone.it/wp-content/uploads/2021/11/0_Seong-Gi-Hun-Squid-Game-1178x765.jpg",
				title: "Titolo Slide 5",
				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nostrum non voluptates eligendi unde obcaecati minima, aut, blanditiis voluptatibus laborum delectus dignissimos necessitatibus earum explicabo ut voluptatum. Doloribus, perferendis in."
			}
		],
	},
	methods: {
		prevImage() {
			// SE sono sulla prima immagine allora torno all'ultima immagine
			if(this.currentIndex === 0) {
				this.currentIndex = this.images.length - 1;
			} else {
				this.currentIndex--;
			}
		},
		nextImage() {
			// SE sono all'ultima immagine 4 === 5 - 1 allora riparto con currentIndex = 0
			if(this.currentIndex === this.images.length - 1) {
				this.currentIndex = 0;
			} else {
				this.currentIndex++;
			}
		},
		changeImage(index) {
			this.currentIndex = index;
		},
		startAutoplay() {
			this.autoplayID = setInterval(() => {
				this.nextImage();
			}, 2000);
		},
		stopAutoplay() {
			clearInterval(this.autoplayID);
		},
	},
	created() {
		// autoplay
		// const self = this;
		// setInterval(function() {
		// 	self.nextImage();
		// }, 2000);
		this.startAutoplay();
	}
});