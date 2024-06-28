import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function CreateCourse() {
  const [form, setForm] = useState({
    name: "",
    image: "",
    semester: "",
    studyProgram: [],
    isOpenToEnroll: "",
    lastUpdate: "",
  });
  const [isNew, setIsNew] = useState(true);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id?.toString() || undefined;
      if (!id) return;
      setIsNew(false);
      const response = await fetch(
        `http://localhost:5050/course/${params.id.toString()}`
      );
      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        console.error(message);
        return;
      }
      const course = await response.json();
      if (!course) {
        console.warn(`Course with id ${id} not found`);
        navigate("/");
        return;
      }
      setForm(course);
    }
    fetchData();
    return;
  }, [params.id, navigate]);

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();
    const course = { ...form };
    try {
      let response;
      if (isNew) {
        // if we are adding a new record we will POST to /record.
        response = await fetch("http://localhost:5050/createNewCourse", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(course),
        });
      } else {
        // if we are updating a record we will PATCH to /record/:id.
        response = await fetch(`http://localhost:5050/edit/${params.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(course),
        });
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("A problem occurred with your fetch operation: ", error);
    } finally {
      setForm({
        name: "",
        image: "",
        semester: "",
        studyProgram: [],
        isOpenToEnroll: "",
        lastUpdate: "",
      });
      navigate("/courselist");
    }
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div className="mx-auto max-w-7xl p-2 lg:px-8">
      <div>
        <h1 className="text-2xl pt-10 font-bold text-gray-900 dark:text-slate-200">
          Create a new Course
        </h1>
        <h1 className="text-lg text-gray-900 dark:text-slate-400">
          Please provide all the necessary information for the registration your
          new course.
        </h1>
      </div>
      <form
        onSubmit={onSubmit}
        className="border rounded-lg overflow-hidden p-4 mt-5 dark:bg-slate-800"
      >
        <div className="grid grid-cols-2 dark:text-slate-400">
          <div>
            <div>
              Course Name
              <input
                type="text"
                name="name"
                id="name"
                className="block flex-1 border rounded-lg bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                value={form.name}
                onChange={(e) => updateForm({ name: e.target.value })}
              />
            </div>
            <div>
              Available for semester
              <input
                type="text"
                name="semester"
                id="semester"
                className="block flex-1 border rounded-lg bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                value={form.semester}
                onChange={(e) => updateForm({ semester: e.target.value })}
              />
            </div>
            <div>
              Study Program
              <input
                type="text"
                name="studyProgram"
                id="studyProgram"
                className="block flex-1 border rounded-lg bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                value={form.studyProgram}
                onChange={(e) => updateForm({ studyProgram: e.target.value })}
              />
            </div>
            <div>
              IsOpenToEnroll
              <input
                type="text"
                name="isOpenToEnroll"
                id="isOpenToEnroll"
                className="block flex-1 border rounded-lg bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                value={form.isOpenToEnroll}
                onChange={(e) => updateForm({ isOpenToEnroll: e.target.value })}
              />
            </div>
          </div>
          <div>
            Course Image
            <input
              type="text"
              name="image"
              id="image"
              className="block flex-1 border rounded-lg bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
              value={form.image}
              onChange={(e) => updateForm({ image: e.target.value })}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <input
            type="submit"
            value="Save Course Data"
            className="p-2 border rounded-lg cursor-pointer hover:bg-gray-300 dark:text-slate-200 dark:hover:bg-sky-900 dark:hover:text-sky-400"
          />
        </div>
      </form>
    </div>
  );
}
