export const json = {
  completedHtml: "<h3>Thank you for your input!</h3> <h5>Your responses will guide us in making informed decisions for this project.</h5>",
  pages: [
    {
      name: "ProjectOverview",
      elements: [
        {
          type: "comment",
          name: "project_overview",
          title: "Project Overview",
          description: "Please provide a brief description of the project. What product(s) are we capturing, and what are your expectations for the final deliverables?",
          isRequired: true,
          placeholder: "Example: 'We’re launching a new skincare line (cleanser, serum, and moisturizer) and need high-quality visuals for our social media and website.'"
        }
      ]
    },
    {
      name: "Objective",
      elements: [
        {
          type: "comment",
          name: "objective",
          title: "Objective",
          description: "What is the main goal of this project? What do you want the audience to feel or do after seeing the content?",
          isRequired: true,
          placeholder: "Example: 'We want to highlight the product's natural ingredients and eco-friendly packaging, and encourage our audience to engage and purchase.'"
        }
      ]
    },
    {
      name: "TargetAudience",
      elements: [
        {
          type: "comment",
          name: "primary_audience",
          title: "Primary Audience",
          description: "Please describe the primary audience you want to reach with this campaign.",
          isRequired: true,
          placeholder: "Example: 'Women, ages 25-40, eco-conscious, willing to invest in sustainable products.'"
        },
        {
          type: "comment",
          name: "secondary_audience",
          title: "Secondary Audience (if applicable)",
          description: "Please describe any secondary audience.",
          placeholder: "Example: 'Young professionals or skincare enthusiasts interested in natural products.'"
        }
      ]
    },
    {
      name: "KeyMessages",
      elements: [
        {
          type: "comment",
          name: "key_messages",
          title: "Key Messages",
          description: "What are the most important messages you want to convey about this product or line?",
          placeholder: "Example: 'The products are organic, cruelty-free, and come in sustainable packaging. Perfect for all skin types.'",
          isRequired: true
        }
      ]
    },
    {
      name: "ToneAndStyle",
      elements: [
        {
          type: "dropdown",
          name: "tone",
          title: "Tone",
          description: "Please describe the tone you want for the photography and videography.",
          isRequired: true,
          choices: ["Refreshing", "Elegant", "Natural", "Minimalistic", "Bold", "Luxurious", "Other"]
        },
        {
          type: "dropdown",
          name: "style",
          title: "Style",
          description: "Please describe the visual style.",
          isRequired: true,
          choices: ["Clean and simple (white background)", "Lifestyle and organic (in-use shots)", "Colorful and vibrant", "Nature-inspired (earthy tones)", "Other"]
        }
      ]
    },
    {
      name: "ShotPreferences",
      elements: [
        {
          type: "dropdown",
          name: "shot_angles",
          title: "Shot Angles (for Photography)",
          choices: ["Straight-on", "45-degree angle", "Overhead", "Close-up/Macro", "Other"]
        },
        {
          type: "dropdown",
          name: "lighting_style",
          title: "Lighting Style",
          choices: ["Soft, natural light", "Bright, high-key lighting", "Dramatic, low-key lighting", "Studio lighting", "Other"]
        }
      ]
    },
    {
      name: "Deliverables",
      elements: [
        {
          type: "comment",
          name: "photography_deliverables",
          title: "Photography",
          placeholder: "Example: 15 product shots (white background), 10 lifestyle shots (real-world settings).",
          isRequired: true
        },
        {
          type: "comment",
          name: "videography_deliverables",
          title: "Videography",
          placeholder: "Example: 3 short videos (15-30 seconds), 1 overview video (60 seconds)."
        }
      ]
    },
    {
      name: "Platforms",
      elements: [
        {
          type: "checkbox",
          name: "platforms",
          title: "Where will the content be used? Please select all that apply.",
          choices: ["Instagram (Feed & Stories)", "TikTok", "Website", "E-commerce/Online Store", "Digital Ads", "Other"]
        }
      ]
    },
    {
      name: "VisualReferences",
      elements: [
        {
          type: "comment",
          name: "visual_references",
          title: "Visual References",
          description: "Are there any brands or campaigns you would like to reference in terms of look, feel, or mood?",
          placeholder: "Please provide links or upload images."
        }
      ]
    },
    {
      name: "Timeline",
      elements: [
        {
          type: "dropdown",
          name: "concept_approval",
          title: "Concept Approval Date",
          choices: ["ASAP", "1-2 weeks", "3-4 weeks", "Other"]
        },
        {
          type: "dropdown",
          name: "shooting_dates",
          title: "Shooting Dates",
          choices: ["Flexible", "Specific dates (please specify)"]
        },
        {
          type: "dropdown",
          name: "first_draft_review",
          title: "First Draft Review",
          choices: ["1 week after shooting", "2 weeks after shooting", "Other"]
        },
        {
          type: "dropdown",
          name: "final_delivery",
          title: "Final Delivery",
          choices: ["2 weeks after first draft", "1 month after first draft", "Other"]
        }
      ]
    },
    {
      name: "Budget",
      elements: [
        {
          type: "dropdown",
          name: "budget",
          title: "What is your estimated budget for this project?",
          choices: ["Under $5,000", "$5,000 - $10,000", "$10,000 - $20,000", "$20,000+", "Other"]
        }
      ]
    },
    {
      name: "Stakeholders",
      elements: [
        {
          type: "comment",
          name: "stakeholders",
          title: "Stakeholders",
          description: "Who will be the main point of contact, and are there other key decision-makers we should be aware of?",
          placeholder: "Example: Emily Johnson, Marketing Director"
        }
      ]
    }
  ],
  showQuestionNumbers: "off"
};