export async function POST(req: Request) {
    try {
      const formData = await req.formData();
      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");
  
      if (!name || !email || !message) {
        return new Response(JSON.stringify({ error: "All fields are required" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }
  
      console.log("Message Received:", { name, email, message });
  
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("API Error:", error);
      return new Response(JSON.stringify({ error: "Server error" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }
  