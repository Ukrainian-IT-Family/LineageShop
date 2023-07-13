<?php

declare(strict_types=1);

namespace App\Actions\Question;


use App\Models\Question;
use Illuminate\Support\Collection;

class QuestionAction
{
    public function getAllQuestions(): Collection
    {
        return (new Question)->all()->sortBy('sort');
    }

    public function getQuestionBySlug($slug): Question
    {
        return (new Question)->where('slug', $slug)->first();
    }
}
