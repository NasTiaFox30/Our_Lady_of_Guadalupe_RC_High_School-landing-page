// IMPORT IMAGES
import mainPhoto from "../assets/images/photos/example1.jpg";

import slide1 from "../assets/images/slider1.jpg";
import slide2 from "../assets/images/slider2.jpg";
import slide3 from "../assets/images/slider3.jpg";

export const schoolInfo = {
    name: "Our Lady of Guadalupe Roman Catholic High School",
    shortName: "OLOG RC",
    typeofSchool: "High School",
    logo: "logo.jpg",
    mainImage: mainPhoto, 
    mainVideo: "",
    GoogleMapsEmbedLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7620.006987345282!2d-88.77227687525179!3d17.26706591887313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5dd53eeb70a3c5%3A0x49f16f5b79b55ec3!2sOur%20Lady%20Of%20Guadalupe%20Highschool!5e0!3m2!1suk!2spl!4v1764522309466!5m2!1suk!2spl",
    
    about: {
        welcomeText: "where we are dedicated to providing a value-based, quality secondary education built on Christian principles, academic rigor, and respectful conduct.",
        historyText: "Our Lady of Guadalupe Roman Catholic High School (OLOGRCHS) was established in September 2003. The foundation of the school was a direct response to the request from Roman Catholics in Belmopan and surrounding communities to their Parish Priest and the Most Reverend Bishop O.P. Martin, Bishop of Belize and Belmopan, for a new secondary institution. Its first campus was humbly located at the compound of the Our Lady of Guadalupe Co-Cathedral on the Ring Road, utilizing the Parish Hall as its initial classrooms. The school subsequently relocated to its permanent compound on the George Price Boulevard, City of Belmopan, in August 2007. Since its inception, OLOGRCHS has been committed to facilitating core Christian values, maintaining a caring but firm discipline policy, and preparing students to serve God, their fellow man, and their country, as encapsulated in the School Pledge.",
        footerText: "Our Lady of Guadalupe R.C. High School is committed to facilitating and providing reinforcement of core values, intervention and enforcement, ensuring the safest and best learning environment possible for our students."
    },
    contacts: {
        country: "Belize",
        address: "Geaorge Price Blvd. City of Belmopan, Cayo District, Belize, C.A.",
        phoneMain: "(+501) 822 0602 ",
        phoneAdditional: "(+501) 822 0602",
        email: "ologh@ologh.edu.bz",
        businessHours: {
            weekdays: "Mon-Fri: 8:00 AM - 4:00 PM",
            saturday: "Saturday: 8:00 AM - 12:00 AM"
        }
    },
    socials: {
        facebook: "https://www.facebook.com/ologh.bmp.bz",
        instagram: "https://www.instagram.com/explore/locations/628915690610298/our-lady-of-guadalupe-roman-catholic-high-school/",
        linkedin: "",
        youtube: "",
    },

    heroSlider: [
        {
            title: "FAITH, KNOWLEDGE, AND SERVICE",
            subtitle: "Providing a robust, value-based secondary education guided by Roman Catholic principles and academic excellence.",
            buttonText: "Our Mission",
            buttonLink: "#about",
            image: slide1
        },
        {
            title: "A FOUNDATION FOR LIFE'S JOURNEY",
            subtitle: "Nurturing students in a supportive, disciplined environment to become responsible citizens and future leaders.",
            buttonText: "Principal's Statement",
            buttonLink: "#gallery",
            image: slide2
        },
        {
            title: "JOIN OUR CATHOLIC COMMUNITY",
            subtitle: "Honoring Our Lady of Guadalupe while inspiring students to live lives of faith, honour, and dedication.",
            buttonText: "Apply Today",
            buttonLink: "#contact",
            image: slide3
        }
    ],

    teachers: {
        'Bay_Rivas': {
            subject: "",
            bio: "Principal"
        },
    },
    galleryCaptions: {
      0: 'Example text',
    },

    stats: [
        { number: 1150, label: 'Active Students' },
        { number: 11, label: 'Expert Teachers' },
        { number: 2, label: 'Support Staff' }
    ] ,
};