import { ServiceComponent } from '../components/ServiceComponent'
import { TestimonialComponents } from '../components/TestimonialComponents'
import { PricingPlanComponent } from '../components/PricingPlanComponent'

export const Service = () => {
  return (
    <div>
      <ServiceComponent/>
      <TestimonialComponents/>
      <PricingPlanComponent/>
    </div>
  )
}
