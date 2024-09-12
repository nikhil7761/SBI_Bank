import React from 'react';
import Navbar from './Navbar'; // Import the Navbar

function Home() {
  return (
    <div>
      {/* Include Navbar at the top */}
    
      
      <div className="home-content container">
        <h1>Welcome to SBI Bank</h1>
        <p>
          SBI Bank, formally known as the State Bank of India, is the largest public sector bank in India.
          Established in 1955, SBI has a rich heritage and a wide array of banking products and services
          tailored to meet the needs of individuals, businesses, and communities.
        </p>
        <p>
          Our comprehensive range of financial services includes personal banking, corporate banking, investment
          banking, and wealth management. We offer innovative products such as digital savings accounts, mobile
          banking apps, and online investment platforms to provide you with the most convenient banking experience.
        </p>
        <p>
          At SBI Bank, we believe in the power of technology to drive financial inclusion. Our digital banking
          services are designed to make banking accessible and convenient for everyone. Whether you are transferring
          funds, paying bills, or managing your investments, our secure online and mobile banking platforms are
          available 24/7.
        </p>
        <p>
          Our commitment to customer service is unparalleled. We have a network of over 22,000 branches and 58,000
          ATMs across India, ensuring that our services are always within your reach. Our dedicated customer support
          team is here to assist you with any banking needs or inquiries.
        </p>
        <p>
          SBI Bank is also at the forefront of corporate social responsibility. We actively participate in community
          development programs, support education and healthcare initiatives, and promote sustainable practices to
          contribute to the socio-economic development of the nation.
        </p>
        <p>
          We are proud to be a trusted partner for millions of customers. Our goal is to help you achieve your financial
          aspirations with personalized solutions and expert advice. Join SBI Bank today and experience the confidence
          that comes with banking with a leader.
        </p>
        <p>
          Discover the difference with SBI Bank – Your Banker for Life.
        </p>
      </div>
    </div>
  );
}

export default Home;
