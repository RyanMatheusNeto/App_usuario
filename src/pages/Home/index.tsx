import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';

const TesteAuctions = [
  {
    id: '1',
    title: 'Leilão de uma casa',
    description: '400mts ',
    imageUrl: 'https://projetaronline.com/wp-content/uploads/2022/11/casa-pequena-planta-baixa-0.png',
    currentBid: 3400,
    endTime: '23:59'
  },





  {
    id: '2',
    title: 'Mansão no Alphaville',
    description: '2.000 mts',
    imageUrl: 'https://images.adsttc.com/media/images/64f0/f509/9e3f/b901/7c1c/1751/newsletter/casa-do-cerrado-ser-arquitetos_12.jpg?1693512986',
    currentBid: 10000000,
    endTime: '58:23'
  },
];

const Home = () => {
  const [auctions, setAuctions] = useState(TesteAuctions); //useState<Auction[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAuctions = async () => {
      // Implemente a lógica para buscar os leilões da API
    };
    fetchAuctions();
  }, []);

  const handleEnterAuction = (auctionId: string) => {
    navigate(`/auction/${auctionId}`);
  };

  return (
    <div>
      <header className={styles.header}>
        <h1>LEILÃO ONLINE</h1>
      </header>

      <div className={styles.container}>
        {auctions.length > 0 ? (
          <ul className={styles.auctionList}>
            {auctions.map(auction => (
              <li key={auction.id} className={styles.auctionItem}>
                <h2 className={styles.auctionTitle}>{auction.title}</h2>
                <p className={styles.auctionDescription}>{auction.description}</p>
                <img src={auction.imageUrl} alt={auction.title} className={styles.auctionImage} />
                <p className={styles.auctionCurrentBid}>Lance Atual: R$ {auction.currentBid}</p>
                <p className={styles.endTime}>Tempo Restante: {auction.endTime}</p>
                <button onClick={() => handleEnterAuction(auction.id)} className={styles.enterButton}>
                  Entrar no leilão
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum leilão ocorrendo no momento.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
