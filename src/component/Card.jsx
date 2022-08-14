import React from 'react'
import './Card.css'
import twitter from '../twitter.png'
import link from '../link.png'
import orgin from '../organization.png'
import location from '../location.png'

function Card({name,username,image,location_data,repos,followers,following,twitter_img,bio,date}) {
  return (
    <div >
        <div className="card">
                <div className="card-image">
                    <img src={image} alt='profileimage'/>
                </div>
                <div className="card-details">
                    <div className="card-details-first">
                        <div className="card-details-text">
                            <h1 className='card-name' >{name === null ? 'No name' : name}</h1>
                            <p className='card-username'>{username}</p>
                            <p className='card-bio'>{bio != null ? bio : 'this profile has no bio'}</p>
                            <p className='card-date'>Joined {date}</p>
                        </div>
                    </div>
                    <div className="card-details-second">
                        <div className="card-repos">
                            <p>Repos</p>
                            <h1>{repos}</h1>
                        </div>
                        <div className="card-followers">
                            <p>Followers</p>
                            <h1>{followers}</h1>
                        </div>
                        <div className="card-following">
                            <p>Following</p>
                            <h1>{following}</h1>
                        </div>
                    </div>
                    <div className="card-details-third">
                        <div className="card-third card-third-location">
                            <img src={location}alt="location" />
                            <p>{location_data === null ? 'No location' : location_data}</p>
                        </div>
                        <div className="card-third card-third-twitter">
                            <img src={twitter} alt='twitter' />
                            <p>{twitter_img !== null ? twitter_img : "No twitter"}</p>
                        </div>
                        <div className="card-third card-third-blog">
                            <img src={link} alt="link" />
                            <p>htttp://github.com</p>
                        </div>
                        <div className="card-third card-third-org">
                            <img src={orgin} alt="origin" />
                            <p>ITF-NECA</p>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Card