import { useState } from "react";
import { Modal } from "./Modal";
import { Button } from "./Button";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { Select } from "./Select";
import { FormGroup, FormLabel, FormErrorMessage } from "./Form";
import type { Topic } from "../../types";

interface AddTopicModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (topic: Omit<Topic, "id" | "lessons" | "slug">) => void;
}

export function AddTopicModal({ isOpen, onClose, onAdd }: AddTopicModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState<"Beginner" | "Intermediate" | "Advanced" | "">("");
  const [tags, setTags] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!title.trim()) newErrors.title = "Please enter a topic name.";
    else if (title.length > 50) newErrors.title = "Topic name is too long.";
    
    if (!description.trim()) newErrors.description = "Please enter a description.";
    else if (description.length > 200) newErrors.description = "Description is too long.";
    
    if (!category) newErrors.category = "Please select a category.";
    if (!difficulty) newErrors.difficulty = "Please select a difficulty.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onAdd({
        title: title.trim(),
        description: description.trim(),
        category,
        difficulty: difficulty as "Beginner" | "Intermediate" | "Advanced",
        tags: tags.split(",").map(t => t.trim()).filter(Boolean),
        isFeatured: false,
      });
      // Reset form
      setTitle("");
      setDescription("");
      setCategory("");
      setDifficulty("");
      setTags("");
      setErrors({});
    }
  };

  const handleClose = () => {
    setErrors({});
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title="Add a New Topic"
      description="Create a new topic to expand the learning catalog."
    >
      <form onSubmit={handleSubmit} className="space-y-4 mt-2">
        <FormGroup>
          <FormLabel htmlFor="title" error={!!errors.title}>Topic Name</FormLabel>
          <Input 
            id="title" 
            placeholder="e.g. Python" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            error={!!errors.title} 
          />
          <FormErrorMessage>{errors.title}</FormErrorMessage>
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="description" error={!!errors.description}>Short Description</FormLabel>
          <Textarea 
            id="description" 
            placeholder="A brief explanation of what this topic covers." 
            value={description} 
            onChange={(e) => setDescription(e.target.value)}
            error={!!errors.description}
          />
          <FormErrorMessage>{errors.description}</FormErrorMessage>
        </FormGroup>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormGroup>
            <FormLabel htmlFor="category" error={!!errors.category}>Category</FormLabel>
            <Select 
              id="category" 
              value={category} 
              onChange={(e) => setCategory(e.target.value)}
              error={!!errors.category}
            >
              <option value="" disabled>Select category</option>
              <option value="Language">Programming Language</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Database">Database</option>
              <option value="Tools">Tools</option>
              <option value="Computer Science">Computer Science</option>
            </Select>
            <FormErrorMessage>{errors.category}</FormErrorMessage>
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="difficulty" error={!!errors.difficulty}>Difficulty</FormLabel>
            <Select 
              id="difficulty" 
              value={difficulty} 
              onChange={(e) => setDifficulty(e.target.value as any)}
              error={!!errors.difficulty}
            >
              <option value="" disabled>Select difficulty</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </Select>
            <FormErrorMessage>{errors.difficulty}</FormErrorMessage>
          </FormGroup>
        </div>

        <FormGroup>
          <FormLabel htmlFor="tags">Tags (Optional)</FormLabel>
          <Input 
            id="tags" 
            placeholder="Comma separated, e.g. web, api, fast" 
            value={tags} 
            onChange={(e) => setTags(e.target.value)} 
          />
        </FormGroup>

        <div className="flex justify-end gap-3 pt-4 border-t">
          <Button type="button" variant="ghost" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit">
            Add Topic
          </Button>
        </div>
      </form>
    </Modal>
  );
}
