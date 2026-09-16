import { Component } from '@angular/core';

@Component({
  selector: 'app-benefits',
  imports: [],
  templateUrl: './benefits.html',
  styleUrl: './benefits.scss',
})
export class Benefits {
   benefits=[
   {
     title: 'Convenient and Accessible Healthcare',
     description: 'MobiClinic brings healthcare to your fingertips, allowing you to access medical services from the comfort of your home. Our platform connects you with qualified healthcare professionals, ensuring timely and efficient care.',
     imageUrl: 'assets/icons/message.png'
   },
   {
    title: 'Expert Medical Professionals',
    description: 'Our team of experienced doctors and specialists are dedicated to providing high-quality healthcare services. With MobiClinic, you can consult with trusted medical professionals who prioritize your well-being.',
    imageUrl: 'assets/icons/woman.png'
   },
   {
    title: 'Affordable and Transparent Pricing',
    description: 'We believe that quality healthcare should be accessible to everyone. MobiClinic offers competitive pricing and transparent billing, ensuring that you receive the care you need without any hidden costs.',
    imageUrl: 'assets/icons/money.png'
   },
   {
    title: 'Secure and Confidential',
    description: 'Your privacy is our top priority. MobiClinic employs advanced security measures to protect your personal information and medical records, ensuring that your data remains confidential and secure.',
    imageUrl: 'assets/icons/secure.png'
   }
  ]
}
