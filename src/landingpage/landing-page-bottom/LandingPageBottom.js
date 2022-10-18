import './LandingPageBottom.scss'
function LandingPageBottom() {
   let a = [1, 2, 3]
   return (
      <div className='landing-page-bottom-wrapper'>
         <div className='items-wrapper'>
            {
               a.map(r => {
                  return <div className='items-container'>
                     <div className='item-img-container margin'>
                        <img className='img' src="https://static-01.daraz.pk/p/13537ff39a839e435836f3d7944958ae.jpg" alt="P47 Wireless Bluetooth Foldable Headset With Microphone FOR All cell phones and laptop" />
                     </div>
                     <p className='margin description'>P47 Wireless Bluetooth Foldable Headset With Microphone FOR All cell phones and laptop</p>
                     <p className='margin current-rs'>RS:123</p>
                     <div className='off-prize-and-percentage'>
                        <p className='margin text-decoration'>RS.500</p>
                        <p className='off-percentage'>-62%</p>
                     </div>
                  </div>
               })
            }

         </div>
      </div>
   )
}
export default LandingPageBottom