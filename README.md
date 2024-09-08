View at app here:

https://sti-powerofmany.vercel.app/

# CreateUnion

## Inspiration
This project is inspired by the intense working culture in South Korea. Research shows that over 65% of workers are dissatisfied with their work-life balance, and 7 out of 10 employees have experienced or are currently dealing with workplace harassment. While these are just some of the challenges workers face, there are ways to unite the workforce and advocate for better conditions—through unions.

Although unions provide a platform to negotiate labor rights, many employees are still hesitant to join or form unions due to fears of retaliation. Forming a union often happens in secrecy, and workers risk their jobs to recruit enough members. Our web application, **CreateUnion**, aims to support individuals who want to establish a union, making it easier to onboard new members and streamline the process.

## What it Does
Our application consists of three core parts:

1. **Info and Registration**
   - The landing page features a chatbot that answers frequently asked questions about forming unions.
   - To create a union, users need to:
     - Register and create an account.
     - After registration, they can create a new union.

2. **Creating a Union**
   - After registering, organizers can:
     - Write a mission statement.
     - Explain the union's objectives.

3. **Onboarding New Members**
   - Once a union is created, the organizer receives a QR code to onboard new members. 
   - New members:
     - Scan the QR code.
     - Access union details, fill out personal information, and sign to register.

### Privacy and Threshold
- Only the organizer has access to the number of registered members.
- The organizer can monitor if the union membership threshold has been met.
- Once the threshold is met, the organizer can view member details for the next steps in formal union formation.

## How We Built It
1. **Vue.js for the Frontend**: We used Vue.js for its flexibility and component-based architecture, creating a dynamic, responsive UI to simplify the union creation process.
   
2. **MySQL and JWT Tokens for Security**: We utilized MySQL for data management and JWT for authentication, ensuring privacy and anonymity for users, which is crucial for those concerned about employer retaliation.
   
3. **Real-time AI Chatbots**: We integrated finetuned AI chatbots to assist users by answering questions and guiding them through the union formation process.

## Challenges We Ran Into
The most significant challenge was merge conflicts while combining branches. We had to abort several merges and reverse changes multiple times, slowing down the progress of some features. Despite this, we are happy with the final product.

## Accomplishments
Our team won prizes during a trivia game: three t-shirts, one clip-on pen, and one mint box. We feel like we won the hackathon just with this accomplishment!

## What We Learned
Teamwork truly makes the dream work. Our skills complemented each other, making collaboration seamless. Taking breaks to bond over games or food was also great for team-building. We’re taking a lot from this experience and look forward to participating in future hackathons.

## What's Next for CreateUnion
1. **Enhanced Anonymity and Identity Verification**: We plan to implement blockchain technology to verify identities while maintaining anonymity.
   
2. **Streamlined Application Process**: We aim to optimize the union formation steps, making the process more intuitive and efficient for organizers.
   
3. **Expansion to Signature Campaigns**: We plan to extend our platform to support signature campaigns for broader social issues, enhancing its impact beyond union formation.
