import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = {firstName: 'Tanish', lastName: 'Garg'};

  return (
    <section className='home'>
        <div className="home-content">
          <header className="home-header">
            <HeaderBox 
            type='greeting'
            title= 'Welcome'
            user={loggedIn?.firstName || 'Guest'}
            subtext='Access and manage your account and transactions effectively.'
            />
        
            <TotalBalanceBox 
            accounts = {[]}
            totalBanks = {1}
            totalCurrentBalance = {1222.33}
            />
          </header>

        </div>
        <RightSideBar 
        user={loggedIn}
        transactions={[]}
        banks={[]}
        />
    </section>
  )
}

export default Home