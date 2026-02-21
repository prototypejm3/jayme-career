import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Send } from "lucide-react";

const SubmitReview = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    reviewer_name: "",
    reviewer_title: "",
    reviewer_company: "",
    relationship: "",
    review_text: "",
  });

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.reviewer_name.trim() || !form.review_text.trim()) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }

    if (form.review_text.trim().length < 20) {
      toast({ title: "Review should be at least 20 characters", variant: "destructive" });
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("reviews").insert({
      reviewer_name: form.reviewer_name.trim().slice(0, 100),
      reviewer_title: form.reviewer_title.trim().slice(0, 100) || null,
      reviewer_company: form.reviewer_company.trim().slice(0, 100) || null,
      relationship: form.relationship.trim().slice(0, 200) || null,
      review_text: form.review_text.trim().slice(0, 5000),
    });
    setLoading(false);

    if (error) {
      toast({ title: "Something went wrong. Please try again.", variant: "destructive" });
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <CheckCircle className="mx-auto mb-6 text-primary" size={48} />
          <h1 className="font-display text-3xl font-bold mb-3">Thank you!</h1>
          <p className="text-muted-foreground">
            Your review has been submitted. I truly appreciate you taking the time!
          </p>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg"
      >
        <div className="text-center mb-10">
          <h1 className="font-display text-4xl font-bold mb-3">Write a Review</h1>
          <p className="text-muted-foreground text-lg">
            I'd love to hear about your experience working with me.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm font-medium mb-1.5 block">
              Your Name <span className="text-destructive">*</span>
            </label>
            <Input
              value={form.reviewer_name}
              onChange={(e) => update("reviewer_name", e.target.value)}
              placeholder="e.g. Jane Smith"
              maxLength={100}
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Title</label>
              <Input
                value={form.reviewer_title}
                onChange={(e) => update("reviewer_title", e.target.value)}
                placeholder="e.g. VP of Engineering"
                maxLength={100}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Company</label>
              <Input
                value={form.reviewer_company}
                onChange={(e) => update("reviewer_company", e.target.value)}
                placeholder="e.g. Genies"
                maxLength={100}
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-1.5 block">
              How did we work together?
            </label>
            <Input
              value={form.relationship}
              onChange={(e) => update("relationship", e.target.value)}
              placeholder="e.g. Jayme recruited me for a VP role"
              maxLength={200}
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-1.5 block">
              Your Review <span className="text-destructive">*</span>
            </label>
            <Textarea
              value={form.review_text}
              onChange={(e) => update("review_text", e.target.value)}
              placeholder="Share your experience..."
              rows={6}
              maxLength={5000}
              required
            />
            <p className="text-xs text-muted-foreground mt-1 text-right">
              {form.review_text.length} / 5000
            </p>
          </div>

          <Button type="submit" className="w-full" size="lg" disabled={loading}>
            {loading ? "Submitting..." : (
              <>
                <Send size={16} className="mr-2" />
                Submit Review
              </>
            )}
          </Button>
        </form>
      </motion.div>
    </main>
  );
};

export default SubmitReview;
