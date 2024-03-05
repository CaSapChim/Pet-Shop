import { ProductComponent } from '../components/ProductComponent'
import { OfferComponent } from '../components/OfferComponent'
import { PricingPlanComponent } from '../components/PricingPlanComponent'

export const Product = () => {
  return (
    <div>
      <ProductComponent/>
      <OfferComponent/>
      <PricingPlanComponent/>
    </div>
  )
}
