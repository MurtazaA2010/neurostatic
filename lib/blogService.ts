// lib/blogService.ts
export async function getBlogById(id: string) {
    try {
      const res = await fetch(`http://localhost:3000/api/blog/${id}`, {
        cache: "no-store",
      });
      if (!res.ok) return null;
      const data = await res.json();
      return data.blog || null;
    } catch (e) {
      return null;
    }
  }
  