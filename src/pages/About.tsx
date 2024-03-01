import React from 'react'
import { AboutComponent } from '../components/AboutComponent'
import { OfferComponent } from '../components/OfferComponent'
import { TeamMembersComponent } from '../components/TeamMembersComponent'

export const About = () => {
  return (
    <div>
      <AboutComponent/>
      <OfferComponent/>
      <TeamMembersComponent/>
    </div>
  )
}
