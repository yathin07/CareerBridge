import React, { useState } from 'react';
import { BrainCircuit, CheckCircle, XCircle, Plus, ExternalLink } from 'lucide-react';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import SkillTag from '../components/common/SkillTag';
import { allSkills, companies } from '../data/skillsData';
import { jobRoles } from '../data/jobRoles';
import { courses } from '../data/courses';
import { matchSkills, calculateMatchPercentage } from '../utils/skillMatcher';

export default function JobPreparation() {
  const [formData, setFormData] = useState({
    name: '',
    education: '',
    experience: '',
    skills: '',
    targetCompany: '',
    targetRole: ''
  });
  
  const [analysis, setAnalysis] = useState<any>(null);
  const [skillSuggestions, setSkillSuggestions] = useState<string[]>([]);

  const handleSkillInput = (value: string) => {
    setFormData({ ...formData, skills: value });
    
    // Show skill suggestions
    if (value.length > 0) {
      const lastSkill = value.split(',').pop()?.trim().toLowerCase() || '';
      if (lastSkill.length > 1) {
        const suggestions = allSkills.filter(skill => 
          skill.toLowerCase().includes(lastSkill) && 
          !value.toLowerCase().includes(skill.toLowerCase())
        ).slice(0, 5);
        setSkillSuggestions(suggestions);
      } else {
        setSkillSuggestions([]);
      }
    } else {
      setSkillSuggestions([]);
    }
  };

  const addSkillSuggestion = (skill: string) => {
    const currentSkills = formData.skills.split(',').map(s => s.trim()).filter(s => s);
    const lastSkillIncomplete = formData.skills.split(',').pop()?.trim() || '';
    
    if (lastSkillIncomplete && !allSkills.some(s => s.toLowerCase() === lastSkillIncomplete.toLowerCase())) {
      currentSkills[currentSkills.length - 1] = skill;
    } else {
      currentSkills.push(skill);
    }
    
    setFormData({ ...formData, skills: currentSkills.join(', ') });
    setSkillSuggestions([]);
  };

  const analyzeSkills = () => {
    if (!formData.targetCompany || !formData.targetRole || !formData.skills) {
      alert('Please fill in all required fields');
      return;
    }

    const userSkills = formData.skills.split(',').map(s => s.trim()).filter(s => s);
    const selectedJob = jobRoles.find(job => 
      job.company === formData.targetCompany && job.title === formData.targetRole
    );

    if (!selectedJob) {
      alert('Selected job role not found');
      return;
    }

    const skillMatch = matchSkills(userSkills, selectedJob.requiredSkills, selectedJob.preferredSkills);
    const matchPercentage = calculateMatchPercentage(skillMatch.matching, selectedJob.requiredSkills.length);
    
    // Get course recommendations for missing skills
    const recommendedCourses = skillMatch.missing.map(skill => {
      return courses.filter(course => 
        course.skill.toLowerCase() === skill.toLowerCase() ||
        course.title.toLowerCase().includes(skill.toLowerCase())
      );
    }).flat();

    setAnalysis({
      job: selectedJob,
      skillMatch,
      matchPercentage,
      recommendedCourses: recommendedCourses.slice(0, 6) // Limit to 6 courses
    });
  };

  const companyOptions = companies.map(company => ({ value: company, label: company }));
  const roleOptions = jobRoles
    .filter(role => !formData.targetCompany || role.company === formData.targetCompany)
    .map(role => ({ value: role.title, label: role.title }));

  return (
    <div className="min-h-screen bg-gray-950 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <BrainCircuit className="h-8 w-8 text-blue-500" />
            <h1 className="text-3xl font-bold text-white">Smart Job Preparation</h1>
          </div>
          <p className="text-gray-400">
            Analyze your skills and get personalized career guidance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card>
            <h2 className="text-xl font-semibold text-white mb-6">Enter Your Information</h2>
            
            <div className="space-y-4">
              <Input
                label="Your Name"
                placeholder="John Doe"
                value={formData.name}
                onChange={(value) => setFormData({ ...formData, name: value })}
                required
              />

              <Input
                label="Education" 
                placeholder="B.Tech in Computer Science"
                value={formData.education}
                onChange={(value) => setFormData({ ...formData, education: value })}
                required
              />

              <Input
                label="Years of Experience"
                type="number"
                placeholder="0"
                value={formData.experience}
                onChange={(value) => setFormData({ ...formData, experience: value })}
              />

              <div className="relative">
                <Input
                  label="Your Skills"
                  placeholder="JavaScript, React, Python, SQL, etc."
                  value={formData.skills}
                  onChange={handleSkillInput}
                  required
                />
                {skillSuggestions.length > 0 && (
                  <div className="absolute z-10 w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
                    {skillSuggestions.map((skill, index) => (
                      <button
                        key={index}
                        onClick={() => addSkillSuggestion(skill)}
                        className="w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-700 first:rounded-t-lg last:rounded-b-lg"
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Select
                label="Target Company"
                value={formData.targetCompany}
                onChange={(value) => setFormData({ ...formData, targetCompany: value, targetRole: '' })}
                options={companyOptions}
                required
              />

              <Select
                label="Target Role"
                value={formData.targetRole}
                onChange={(value) => setFormData({ ...formData, targetRole: value })}
                options={roleOptions}
                required
              />

              <Button
                onClick={analyzeSkills}
                variant="primary"
                className="w-full"
              >
                Analyze Skills
              </Button>
            </div>
          </Card>

          {/* Analysis Results */}
          {analysis && (
            <Card>
              <h2 className="text-xl font-semibold text-white mb-6">Skill Analysis Results</h2>
              
              <div className="space-y-6">
                {/* Match Percentage */}
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">
                    {analysis.matchPercentage}% Match
                  </div>
                  <p className="text-gray-400">
                    for {analysis.job.title} at {analysis.job.company}
                  </p>
                </div>

                {/* Matching Skills */}
                {analysis.skillMatch.matching.length > 0 && (
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <h3 className="font-semibold text-green-400">Matching Skills</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {analysis.skillMatch.matching.map((skill: string, index: number) => (
                        <SkillTag key={index} skill={skill} type="matching" />
                      ))}
                    </div>
                  </div>
                )}

                {/* Missing Skills */}
                {analysis.skillMatch.missing.length > 0 && (
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Plus className="h-5 w-5 text-red-500" />
                      <h3 className="font-semibold text-red-400">Skills to Learn</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {analysis.skillMatch.missing.map((skill: string, index: number) => (
                        <SkillTag key={index} skill={skill} type="missing" />
                      ))}
                    </div>
                  </div>
                )}

                {/* Irrelevant Skills */}
                {analysis.skillMatch.irrelevant.length > 0 && (
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <XCircle className="h-5 w-5 text-yellow-500" />
                      <h3 className="font-semibold text-yellow-400">Less Relevant Skills</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {analysis.skillMatch.irrelevant.map((skill: string, index: number) => (
                        <SkillTag key={index} skill={skill} type="irrelevant" />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Card>
          )}
        </div>

        {/* Course Recommendations */}
        {analysis && analysis.recommendedCourses.length > 0 && (
          <Card className="mt-8">
            <h2 className="text-xl font-semibold text-white mb-6">Recommended Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {analysis.recommendedCourses.map((course: any) => (
                <div key={course.id} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                  <h3 className="font-semibold text-white mb-2">{course.title}</h3>
                  <p className="text-sm text-gray-400 mb-2">{course.provider}</p>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-blue-400 font-semibold">{course.price}</span>
                    <span className="text-sm text-gray-400">{course.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-yellow-400">★ {course.rating}</span>
                    <a
                      href={course.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 text-sm"
                    >
                      <span>View Course</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}