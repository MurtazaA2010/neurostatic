// lib/blogService.ts
export async function getCaseById(id: string) {
    try {
      const res = await fetch(`http://localhost:3000/api/case-studies/${id}`, {
        cache: "no-store",
      });
      if (!res.ok) return null;
      const data = await res.json();
      return data.blog || null;
    } catch (e) {
      return null;
    }
  }
  