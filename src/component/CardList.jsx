import React from 'react'
import Card from './Card'
import './Cardlist.css'
function CardList({users}) {
  return (
    <div className='cardlist-container'>
       { users.map((user)=>(
        <Card 
            key={user.id}
            name = {user.name}
            username = {user.login}
            image ={user.avatar_url}
            location_data = {user.location}
            repos = {user.public_repos}
            followers = {user.followers}
            following = {user.following}
            twitter_img = {user.twitter_username}
            bio = {user.bio}
            date ={user.created_at}
        />
       ))}
       
    </div>
  )
}

export default CardList