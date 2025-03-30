import Image from "next/image";
import Link from "next/link";

const WhatsAppButton = () => {
  const phoneNumber = "922136673492"; // Replace with your actual number

  return (
    <Link href={`https://wa.me/${phoneNumber}`} target="_blank">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        width={60}
        height={60}
        style={{   
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: "1000",
            cursor: "pointer",
            borderRadius: "50%",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)"
          }}
      />
    </Link>
  );
};

export default WhatsAppButton;
