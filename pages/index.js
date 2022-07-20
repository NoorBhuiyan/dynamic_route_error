import React, { Component } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Col, Row, Card } from 'react-bootstrap';
class Index extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
		};
	}

	componentDidMount() {
		axios
			.get('https://jsonplaceholder.typicode.com/posts')
			.then(x => {
				this.setState({ data: x.data });
			})
			.catch();
	}

	render() {
		let data = this.state.data;
		let allData = data.map(x => {
			return (
				<Col key={x.id}>
					<Link href={'./blog/' + x.id}>
						<Card className="card">
							<h4 className="card-title">{x.title}</h4>
							<div className="card-body">{x.body}</div>
							<button>Check all</button>
						</Card>
					</Link>
				</Col>
			);
		});
		return (
			<div>
				<Row className="row">{allData}</Row>
			</div>
		);
	}
}

export default Index;

// import Head from 'next/head';
// import styles from '../styles/Home.module.css';
// import Link from 'next/link';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function Home(props) {

// 	const [data, setData] = useState([]);
// 	useEffect(() => {
// 		axios.get('https://jsonplaceholder.typicode.com/posts/').then(x => {
// 			setData(x.data);
// 		});
// 	}, []);

// 	const showAll = data.map(x => {
//     let slug = x.title.replace(/ /g,"-")
//     console.log(slug)
// 		return (
// 			<Link href={'./blog/' + x.id} key={x.id}>
// 				<a className={styles.card}>
// 					<h2>{x.title.slice(0, 30)}</h2>
// 					<p>{x.body}</p>
// 				</a>
// 			</Link>
// 		);
// 	});

// 	return (
// 		<div className={styles.container}>
// 			<Head>
// 				<title>Next App</title>
// 			</Head>

// 			<main className={styles.main}>
// 				<h1 className={styles.title}>My blog</h1>
// 				<Link href={'./about'} as="./siteabout">About Us page</Link>

// 				<div className={styles.grid}>
// 					{console.log(data)}

// 					{showAll}
// 				</div>
// 			</main>
// 		</div>
// 	);
// }

// // export const getServerSideProps=async(ctx)=>{
// //   const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
// //   const data = await res.json()
// //   return{
// //     props:{data}
// //   }
// // }
